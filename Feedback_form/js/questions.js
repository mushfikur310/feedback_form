// questions.js
// Lets define the tree of questions here
let partnerPipeline = ["intro", "partner-step-one"];
let customerPipeline = ["intro", "customer-step-one", "customer-step-two", "customer-step-three" ]
let partnerFormIndex = 0;
let customerFormIndex = 0;
var jsonData = {}
let formStructure = {
	intro: {
		filledRequiredQuestions: false,
		name: {
			question: "Name",
			type: "textInput",
			answer: null,
			trigger: null,
			required: false
		},
		email: {
			question: "email",
			type: "textInput",
			answer: null,
			trigger: null,
			required: false
		},
		role: {
			question: "role",
			type: "selection",
			answer: null,
			trigger: null,
			required: true,
			options: [
				{label: "I am a customer of Reverie", value: "customer"},
				{label: "I am a partner of Reverie", value: "partner"}
			]
		},
	},
	partnerStepOne:{
		deliveryExpectationRating: {
			answer: null,
			required: false,
			comment: null
		},
		reduceTat: {
			answer: null,
			required: false,
			comment: null
		},
		deliveryTimeline: {
			answer: null,
			required: false,
			comment: null
		},
		partnerClientResponse: {
			answer: null,
			required: false,
			comment: null
		},
		solutionEffectiveness: {
			answer: null
		},
		industryInsights: {
			answer: null
		},
		queryResponsiveness: {
			answer: null
		},
		domainExpertise: {
			answer: null
		},

	},
	customerStepOne:{
		
	},
	customerStepTwo:{
		
	},
	customerStepThree:{
	}
};


//Function that makes it rock

(
	function(){

		if(!formStructure.intro.filledRequiredQuestions){
			displayScreen("intro");
			$("#partner-step-one").hide()
			$("#customer-step-one").hide()
			$("#customer-step-two").hide()
			$("#customer-step-three").hide()
			$("#follow-customer-step-two").hide()
			$("#follow-customer-step-three").hide()
			$("#noTsInteract").hide()
			$("#noTechInteract").hide()
			$(".comment-box").hide()
			$("#thankYou").hide()
		}

		// Control what happens on focus
		$(".inputEl").focus(function(e){
			//Sroll the focus
			scrollTo(e.target);
			if($(e.target).hasClass("bottomQuestion")){
				$("#intro_next").addClass("animate__animated animate__heartBeat");
			}
			let dataLabel = $(e.target).data("label")
			$(`.comment-box[data-label="${dataLabel}"]`).show();
			var sec = e.target.dataset.section
			var lab = e.target.dataset.label
			var ques = $(e.target).closest(".questionElement").find(".question").html()
			if(!jsonData[sec]){
				jsonData[sec] = {}
			}
			jsonData[`${sec}_${lab}`] = ques
			console.log(jsonData)
		})

		$(".starRating").click(function(e){
			var sec = e.currentTarget.dataset.section
			var lab = e.currentTarget.dataset.label
			var ques = $(e.target).closest(".star-with-question").find(".starQuestion").html()
			if(!ques){
				ques = $(e.target).closest(".questionElement").find(".question").html()
			}
			if(!jsonData[sec]){
				jsonData[sec] = {}
			}
			jsonData[`${sec}_${lab}`] = ques
			console.log(jsonData)
		})
		//Control what happens on blur
		$(".inputEl").blur(function(e){
			$(e.target).toggleClass("selected")
		})

		$(".inputEl").change(function(e){
			let {section, label}= e.target.dataset;
			if(!formStructure[section][label]){
				formStructure[section][label] = {}
				let parentsUntil = $($(`[data-section="${section}"][data-label='${label}']`)[0]).parentsUntil(".questionElement");
				$(parentsUntil[parentsUntil.length-1]).removeClass("error")
			}
			if(!$(e.target).hasClass("comment")){
				formStructure[section][label]["answer"] = e.target.value;
			}
			if(formStructure.intro.email.answer && validateEmail(formStructure.intro.email.answer)){
				$("#email").removeClass("error")
			}
			if(formStructure.intro.name.answer){
				$("#name").removeClass("error")
			}
			if(formStructure.intro.role.answer){
				$("#role_selector").removeClass("error")
			}
			if(label === "tsInteract" && e.target.value==="yes"){
				$("#follow-customer-step-two").show()
				$("#noTsInteract").hide();
				$("#follow-customer-step-two").addClass("animate__animated")
				$("#follow-customer-step-two").addClass("animate__fadeInUp faster")
				setTimeout(function(){
					$("#follow-customer-step-two").removeClass("animate__fadeInUp faster")
					$("#follow-customer-step-two").removeClass("animate__animated")
				},600)
			}
			if(label === "tsInteract" && e.target.value==="no"){
				$("#noTsInteract").show();
				$("#follow-customer-step-two").addClass("animate__animated")
				$("#follow-customer-step-two").addClass("animate__fadeOutDown")
				setTimeout(function(){
					$("#follow-customer-step-two").removeClass("animate__fadeOutDown")
					$("#follow-customer-step-two").removeClass("animate__animated")
					$("#follow-customer-step-two").hide()
				},600)
			}
			if(label === "techInteract" && e.target.value==="yes"){
				$("#follow-customer-step-three").show()
				$("#noTechInteract").hide();
				$("#follow-customer-step-three").addClass("animate__animated")
				$("#follow-customer-step-three").addClass("animate__fadeInUp faster")
				setTimeout(function(){
					$("#follow-customer-step-three").removeClass("animate__fadeInUp faster")
					$("#follow-customer-step-three").removeClass("animate__animated")
				},600)
			}
			if(label === "techInteract" && e.target.value==="no"){
				$("#noTechInteract").show();
				$("#follow-customer-step-three").addClass("animate__animated")
				$("#follow-customer-step-three").addClass("animate__fadeOutDown")
				setTimeout(function(){
					$("#follow-customer-step-three").removeClass("animate__fadeOutDown")
					$("#follow-customer-step-three").removeClass("animate__animated")
					$("#follow-customer-step-three").hide()
				},600)
			}
		})

		$(".comment").change(function(e){
			let {section, label}= e.target.dataset;
			formStructure[section][label]["comment"] = e.target.value;
		})

		$(".next").click(function(e){
			e.preventDefault();
			console.log($(e.target).attr("id"))
			if($(e.target).attr("id") === "intro_next"){
				if(!formStructure.intro.role.answer || !formStructure.intro.name.answer || !formStructure.intro.email.answer || !validateEmail(formStructure.intro.email.answer)){
					alert("All fields are required. Please fill in the information to continue")
					if(!formStructure.intro.role.answer){
						$("#role_selector").addClass("error")
					}
					if(!formStructure.intro.name.answer){
						$("#name").addClass("error")
					}
					if(!formStructure.intro.email.answer || !validateEmail(formStructure.intro.email.answer )){
						alert("Please enter a valid email")
						$("#email").addClass("error")
					}
					return
				}
				byeForm("intro")
				if(formStructure.intro.role.answer === "partner"){
					hiForm("partner-step-one")
					$(".starRating").starRating({
					    starSize: 30,
					    disableAfterRate: false,
					    callback: function(currentRating, $el){
					    	let section = $el.data("section")
					    	let label = $el.data("label")
								if(!formStructure[section][label]){
									formStructure[section][label] = {}
									let parentsUntil = $($(`[data-section="${section}"][data-label='${label}']`)[0]).parentsUntil(".questionElement");
								$(parentsUntil[parentsUntil.length-1]).removeClass("error")
								}
					    	formStructure[section][label]["answer"] = currentRating;
								//Show comments when Rating is clicked
								if(label === "solutionEffectiveness"){
									$(`.comment-box[data-label="${label}"]`).show();
								}
								if(label === "industryInsights" || label === "queryResponsiveness" || label === "domainExpertise" || label === "technicalCompetency"){
									if(formStructure[section]["industryInsights"]["answer"] 
											&& formStructure[section]["queryResponsiveness"]["answer"] 
											&& formStructure[section]["domainExpertise"]["answer"] 
											&& formStructure[section]["technicalCompetency"]["answer"]
										){
										$(`.comment-box[data-label="industryInsightsGroup"]`).show();
									}
								}
					    }
					});
					$("#partner_step_one_next").click(function(e){
						let validated = true;
						let allLabels = []
						$("#partner-step-one").find(".ratingAnswer").each(function(i,el){
							allLabels.push($(el).data("label"))
						})
						let labelSet = new Set(allLabels);
						allLabels = Array.from(labelSet);
						allLabels.forEach(function(label,index){
							if(!formStructure["partnerStepOne"][label] || !formStructure["partnerStepOne"][label]["answer"]){
								validated = false
								console.log(label, " not filled", $($(`[data-section="partnerStepOne"][data-label='${label}']`)[0]).parentsUntil(".questionElement"))
								let parentsUntil = $($(`[data-section="partnerStepOne"][data-label='${label}']`)[0]).parentsUntil(".questionElement");
								$(parentsUntil[parentsUntil.length-1]).addClass("error")
							}
						})
						if(!validated){
							alert("Please fill in all the questions before proceeding")
						}
						else{
							done()
						}
					})
				}
				if(formStructure.intro.role.answer === "customer"){
					hiForm("customer-step-one")
					$(".starRating").starRating({
					    starSize: 30,
					    disableAfterRate: false,
					    callback: function(currentRating, $el){
					    	let section = $el.data("section")
					    	let label = $el.data("label")
								if(!formStructure[section][label]){
									formStructure[section][label] = {answer: ""}
									let parentsUntil = $($(`[data-section="${section}"][data-label='${label}']`)[0]).parentsUntil(".questionElement");
								$(parentsUntil[parentsUntil.length-1]).removeClass("error")
								}
					    	formStructure[section][label]["answer"] = currentRating;
								if(label === "solutionEffectiveness"){
									$(`.comment-box[data-label="${label}"]`).show();
								}
								if(label === "deliverySkills" || label === "queryResponsiveness" || label === "domainExpertise" || label === "engagementEffectiveness"){
									if(formStructure[section]["deliverySkills"]["answer"] && formStructure[section]["queryResponsiveness"]["answer"] && formStructure[section]["domainExpertise"]["answer"]  && formStructure[section]["engagementEffectiveness"]["answer"]){
										$(`.comment-box[data-label="performanceComment"]`).show();
									}
								}
								if(label === "translationQuality" || label === "translationTat"){
									if(formStructure[section]["translationQuality"]["answer"] && formStructure[section]["translationTat"]["answer"]){
										$(`.comment-box[data-label="translationServiceComment"]`).show();
									}
								}
					    }
					});
					$(document).on("click", "#customer_step_one_next", function(e){
						let validated = true;
						let allLabels = []
						$("#customer-step-one").find(".ratingAnswer").each(function(i,el){
							allLabels.push($(el).data("label"))
						})
						let labelSet = new Set(allLabels);
						allLabels = Array.from(labelSet);
						allLabels.forEach(function(label,index){
							if(!formStructure["customerStepOne"][label] || !formStructure["customerStepOne"][label]["answer"]){
								validated = false
								console.log(label, " not filled", $($(`[data-section="customerStepOne"][data-label='${label}']`)[0]).parentsUntil(".questionElement"))
								let parentsUntil = $($(`[data-section="customerStepOne"][data-label='${label}']`)[0]).parentsUntil(".questionElement");
								$(parentsUntil[parentsUntil.length-1]).addClass("error")
							}
						})
						if(!validated){
							alert("Please fill in all the questions before proceeding")
						}
						else{
							byeForm("customer-step-one");
							hiForm("customer-step-two");
						}
					})
					$(document).on("click", "#customer_step_two_next", function(e){
						let validated = true;
						let allLabels = []
						$("#customer-step-two").find(".ratingAnswer").each(function(i,el){
							allLabels.push($(el).data("label"))
						})
						let labelSet = new Set(allLabels);
						allLabels = Array.from(labelSet);
						allLabels.forEach(function(label,index){
							if(!formStructure["customerStepTwo"][label] || !formStructure["customerStepTwo"][label]["answer"]){
								validated = false
								console.log(label, " not filled", $($(`[data-section="customerStepTwo"][data-label='${label}']`)[0]).parentsUntil(".questionElement"))
								let parentsUntil = $($(`[data-section="customerStepTwo"][data-label='${label}']`)[0]).parentsUntil(".questionElement");
								$(parentsUntil[parentsUntil.length-1]).addClass("error")
							}
						})
						if(formStructure["customerStepTwo"]["tsInteract"]["answer"] === "no"){
							byeForm("customer-step-two");
							hiForm("customer-step-three");
							return
						}
						if(!validated){
							alert("Please fill in all the questions before proceeding")
						}
						else{
							byeForm("customer-step-two");
							hiForm("customer-step-three");
						}
					})
					$(document).on("click","#customer_step_three_done", function(e){
						let validated = true;
						let allLabels = []
						$("#customer-step-three").find(".ratingAnswer").each(function(i,el){
							allLabels.push($(el).data("label"))
						})
						let labelSet = new Set(allLabels);
						allLabels = Array.from(labelSet);
						allLabels.forEach(function(label,index){
							if(!formStructure["customerStepThree"][label] || !formStructure["customerStepThree"][label]["answer"]){
								validated = false
								console.log(label, " not filled", $($(`[data-section="customerStepThree"][data-label='${label}']`)[0]).parentsUntil(".questionElement"))
								let parentsUntil = $($(`[data-section="customerStepThree"][data-label='${label}']`)[0]).parentsUntil(".questionElement");
								$(parentsUntil[parentsUntil.length-1]).addClass("error")
							}
						})
						if(formStructure["customerStepThree"]["techInteract"]["answer"] === "no"){
							done()
							return
						}
						if(!validated){
							alert("Please fill in all the questions before proceeding")
						}
						else{
							done()
						}
					})
					// $("#customer_step_two_next").click(function(e){
					// 	byeForm("customer-step-two");
					// 	hiForm("customer-step-three");
					// })
				}

			}
			
			
		})

		$(".back").click(function(e){
			let {section} = e.target.dataset;
			if(formStructure.intro.role.answer === "partner"){
				byeForm("partner-step-one")
				hiForm("intro")
			}
			else{
				if(section === "customerStepOne"){
					byeForm("customer-step-one")
					hiForm("intro")
				}
				if(section === "customerStepTwo"){
					byeForm("customer-step-two")
					hiForm("customer-step-one")
				}
				if(section === "customerStepThree"){
					byeForm("customer-step-three")
					hiForm("customer-step-two")
				}
				if(section === "customerStepFour"){
					byeForm("customer-step-four")
					hiForm("customer-step-three")
				}
			}
		})

		function done(){
			byeForm("customer-step-three");
			byeForm("partner-step-one");
			hiForm("thankYou");
			console.log(formStructure)
			var settings = {
				// "url": "http://localhost:5000/feedback_api/feedback",
				"url": `${API_URL}/feedback`,
				"method": "POST",
				"headers": {
					"Content-Type": "application/json"
				},
				"data": JSON.stringify(formStructure),
			};
			
			$.ajax(settings).done(function (response) {
				console.log(response);
			});
		}
	}
)();

function byeForm(id){
	let effect = id === "intro" ? "animate__fadeOutLeft" : "animate__fadeOutLeft"
	$("#"+id).addClass("animate__animated "+ effect);
	setTimeout(function(){
		$("#"+id).hide();
		$("#"+id).removeClass("animate__animated "+ effect)
	},520)
}
function hiForm(id){
	let effect = id === "intro" ? "animate__fadeInLeft" : "animate__fadeInRight"
	$("#"+id).addClass("animate__animated "+effect);
	setTimeout(function(){
		$("#"+id).show();
		$("#"+id).removeClass("animate__animated "+effect);
	},520)
}
function displayScreen(screenName){
	$("#intro").show();
	// $(".inputValue").change(function(e){
	// 	let target = e.target.dataset.label;
	// 	let section = e.target.dataset.section;
	// 	formStructure[section][target].answer = e.target.value
	// })
}
function scrollTo (el) {

	$(el).toggleClass("selected");
	if($(el).hasClass("comment")){
		return
	}
	$('#questionForm').animate({
		scrollTop: $(el).offset().top - $(window).height()/4
	}, 600);
}
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

(function hideComments(){
	var questions = ["How well did we help you in reducing the time to launch your product/service?",
	"Has our team been able to deliver the product/solution as per your expectations and within agreed timelines?",
	"Please rate the effectiveness of our solutions in resolving your problems",
	"Please rate the Reverie team's overall performance on the following items",
	"How comprehensive and innovative are Reverie’s products related to Indian languages?",
	"Has the Reverie team been able to deliver the product/solution as per your expectations and within agreed timelines?",
	"Please rate the effectiveness of our solutions in resolving your client needs & problems",
	"Have we provided you relevant collaterals & effective demos to ensure sales effectiveness in building a better sales pipeline?",
	"Please rate the Reverie team on the following parameters",
	"Please rate the positive impact our products/solutions have on your clients?",
	"Please rate our translations based on"
]
	var questionList = questions.map(function(q){
		return q.toLowerCase()
	})
	$(".comment-box").each(function(i, cel){
		var innerText = $(cel).parent().parent().siblings(".question").text().trim().toLowerCase()
		console.log(questionList.indexOf(innerText)>-1 ?innerText  : "not found")
		if(!(questionList.indexOf(innerText)>-1)){
			$(cel).html("")
		}
	})
})()