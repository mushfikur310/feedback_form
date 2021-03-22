// questions.js
// Lets define the tree of questions here
let partnerPipeline = ["intro", "partner-step-one"];
let customerPipeline = ["intro", "customer-step-one", "customer-step-two", "customer-step-three" ]
let partnerFormIndex = 0;
let customerFormIndex = 0;
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
		deliveryExpectationRating: {
			answer: null,
			required: false,
			comment: null
		},
		gtmTat: {
			answer: null,
			required: false,
			comment: null
		},
		deliveryTimeline: {
			answer: null,
			required: false,
			comment: null
		},
	},
	customerStepTwo:{
		tsInteract:{
			answer: null,
			required: false,
			comment: null
		}
	},
	customerStepThree:{
		techInteract:{
			answer: null,
			required: false,
			comment: null
		}
	}
};


//Function that makes it rock baby

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
		})

		//Control what happens on blur
		$(".inputEl").blur(function(e){
			$(e.target).toggleClass("selected")
		})

		$(".inputEl").change(function(e){
			let {section, label}= e.target.dataset;
			if(!formStructure[section][label]){
				formStructure[section][label] = {}
			}
			formStructure[section][label]["answer"] = e.target.value;
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
				if(!formStructure.intro.role.answer){
					$("#role_selector").toggleClass("animate__animated animate__shakeX fast")
					setTimeout(function(){
						$("#role_selector").toggleClass("animate__animated animate__shakeX fast")

					},500)
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
					    	formStructure[section][label]["answer"] = currentRating;
					    }
					});
				}
				if(formStructure.intro.role.answer === "customer"){
					hiForm("customer-step-one")
					$(".starRating").starRating({
					    starSize: 30,
					    disableAfterRate: false,
					    callback: function(currentRating, $el){
					    	let section = $el.data("section")
					    	let label = $el.data("label")
					    	formStructure[section][label]["answer"] = currentRating;
					    }
					});
					$("#customer_step_one_next").click(function(e){
						byeForm("customer-step-one");
						hiForm("customer-step-two");
					})
					$("#customer_step_two_next").click(function(e){
						byeForm("customer-step-two");
						hiForm("customer-step-three");
					})
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

		$(".done").click(function(){
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
		})
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
	setTimeout(function(){
		console.log(formStructure);
	},10000)
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