    let feedbackValues = [];

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let currentUser, engagement_with_reverie, product_effectiveness_rate, refer_reverie_to_other, among_top3_companies, understanding_business_problem, solution_for_business, timely_response_to_queries = '';

    /* Delivery / Customer variables */
    let customerChecked;
    let expectationThubmRate, reducing_launch_time_for_localized_products, on_time_delivery_rate, preferred_solution_provider, comprehensive_and_innovative_product_rate, best_business_practices_being_shared_rate, interaction_with_product_specialist = '';
    let delivery_expectation = {};
    let reverie_teams_overall_performance_rate = {};
    let translation_services_experience_rate = {};

    /* Partners & Alliances variables */
    let partnerChecked;
    let ability_to_deliver_expectation, time_reduced_in_product_launch, rate_of_product_effictiveness, client_suppurt_cycle_rate, training_support_to_clients, relevant_collaterals_and_effective_demos, engagement_with_teams_rate, insights_related_to_industry, domail_expertise, reverie_portfolio_help_rate, recommenr_reverie_for_localization_rate, reverie_offer_rate, partner_few_words_of_encouragement = '';
    let reverie_team_rate = {};
    let partner_expectation = {};
    let reverie_training_support_to_clients = {};
    let response_to_queries = {};


    var checkSelected = document.querySelector('#customer');
    var customerCheckedObj = document.querySelector('#customerCheck');
    customerChecked = customerCheckedObj.checked;

    var partnerCheckedObj = document.querySelector('#partnerChecked');
    partnerChecked = partnerCheckedObj.checked;

    if (checkSelected.id === 'customer') {
      currentUser = checkSelected.id;
      document.querySelector('.customer-section').style.display = 'block';
      console.log('Current user -->', currentUser);
    }

    document.getElementById('customerCheck').addEventListener('click', (ev) => {
      customerChecked = ev.target.checked;
    });

    /* Please choose your relationship with Reverie: */
    document.querySelector('#customer').addEventListener('click', () => {
      currentUser = "customer";
      document.querySelector('.customer-section').style.display = 'block';
      document.querySelector('.partner-section').style.display = 'none';
      console.log('Current user -->', currentUser);
    });
    document.querySelector('#partner').addEventListener('click', () => {
      currentUser = "partner";
      document.querySelector('.customer-section').style.display = 'none';
      document.querySelector('.partner-section').style.display = 'block';
      console.log('Current user -->', currentUser);
    });
    document.querySelector('#other').addEventListener('click', () => {
      currentUser = "other";
      document.querySelector('.customer-section').style.display = 'none';
      document.querySelector('.partner-section').style.display = 'none';
      console.log('Current user -->', currentUser);
    });

    /* Have you experienced our translation services? */
    document.querySelector('#open-experience').addEventListener('click', () => {
      document.querySelector('#customer-experience').style.display = 'block';
    });
    document.querySelector('#close-experience').addEventListener('click', () => {
      document.querySelector('#customer-experience').style.display = 'none';
    });

    /* Have you had any interaction with our engineering and product specialist teams? */
    document.querySelector('#open-interaction').addEventListener('click', () => {
      document.querySelector('#interaction').style.display = 'block';
    });
    document.querySelector('#close-interaction').addEventListener('click', () => {
      document.querySelector('#interaction').style.display = 'none';
    });

    /* How do you feel about your overall engagement with Reverie? */
    document.getElementById('engagement5').addEventListener('click', () => {
      let allClasses = [engagement1, engagement2, engagement3, engagement4];
      engagement_with_reverie = 5;
      document.getElementById('engagement5').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('engagement4').addEventListener('click', () => {
      let allClasses = [engagement1, engagement2, engagement3, engagement5];
      engagement_with_reverie = 4;
      document.getElementById('engagement4').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('engagement3').addEventListener('click', () => {
      let allClasses = [engagement1, engagement2, engagement4, engagement5];
      engagement_with_reverie = 3;
      document.getElementById('engagement3').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('engagement2').addEventListener('click', () => {
      let allClasses = [engagement1, engagement3, engagement4, engagement5];
      engagement_with_reverie = 2;
      document.getElementById('engagement2').classList.add('t1');
        allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('engagement1').addEventListener('click', () => {
      let allClasses = [engagement2, engagement3, engagement4, engagement5];
      engagement_with_reverie = 1;
      document.getElementById('engagement1').classList.add('t1');
        allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });

    /* How likely are you to refer Reverie to other companies looking for language localization requirements? */
    document.getElementById('refer_reverie5').addEventListener('click', () => {
      let allClasses = [refer_reverie1, refer_reverie2, refer_reverie3, refer_reverie4];
      refer_reverie_to_other = 5;
      document.getElementById('refer_reverie5').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('refer_reverie4').addEventListener('click', () => {
      let allClasses = [refer_reverie1, refer_reverie2, refer_reverie3, refer_reverie5];
      refer_reverie_to_other = 4;
      document.getElementById('refer_reverie4').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('refer_reverie3').addEventListener('click', () => {
      let allClasses = [refer_reverie1, refer_reverie2, refer_reverie4, refer_reverie5];
      refer_reverie_to_other = 3;
      document.getElementById('refer_reverie3').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('refer_reverie2').addEventListener('click', () => {
      let allClasses = [refer_reverie1, refer_reverie3, refer_reverie4, refer_reverie5];
      refer_reverie_to_other = 2;
      document.getElementById('refer_reverie2').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('refer_reverie1').addEventListener('click', () => {
      let allClasses = [refer_reverie2, refer_reverie3, refer_reverie4, refer_reverie5];
      refer_reverie_to_other = 1;
      document.getElementById('refer_reverie1').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });

    /* Would you consider Reverie as one of the Top-3 companies among the language technology businesses in India? */
    document.getElementById('top5').addEventListener('click', () => {
      let allClasses = [top1, top2, top3, top4];
      among_top3_companies = 5;
      document.getElementById('top5').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('top4').addEventListener('click', () => {
      let allClasses = [top1, top2, top3, top5];
      among_top3_companies = 4;
      document.getElementById('top4').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('top3').addEventListener('click', () => {
      let allClasses = [top1, top2, top4, top5];
      among_top3_companies = 3;
      document.getElementById('top3').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('top2').addEventListener('click', () => {
      let allClasses = [top1, top3, top4, top5];
      among_top3_companies = 2;
      document.getElementById('top2').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('top1').addEventListener('click', () => {
      let allClasses = [top2, top3, top4, top5];
      among_top3_companies = 1;
      document.getElementById('top1').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });

    /* Did our sales and pre-sales teams understand your requirements well and suggest appropriate solutions? */
    /* Understanding of your business problem */
    document.getElementById('sales_bp_star5').addEventListener('click', (ev) => {
      understanding_business_problem = 5;
    });
    document.getElementById('sales_bp_star4').addEventListener('click', (ev) => {
      understanding_business_problem = 4;
    });
    document.getElementById('sales_bp_star3').addEventListener('click', (ev) => {
      understanding_business_problem = 3;
    });
    document.getElementById('sales_bp_star2').addEventListener('click', (ev) => {
      understanding_business_problem = 2;
    });
    document.getElementById('sales_bp_star1').addEventListener('click', (ev) => {
      understanding_business_problem = 1;
    });
    /* Explanation of the right solution for your business */
    document.getElementById('sales_bs_star5').addEventListener('click', (ev) => {
      solution_for_business = 5;
    });
    document.getElementById('sales_bs_star4').addEventListener('click', (ev) => {
      solution_for_business = 4;
    });
    document.getElementById('sales_bs_star3').addEventListener('click', (ev) => {
      solution_for_business = 3;
    });
    document.getElementById('sales_bs_star2').addEventListener('click', (ev) => {
      solution_for_business = 2;
    });
    document.getElementById('sales_bs_star1').addEventListener('click', (ev) => {
      solution_for_business = 1;
    });
    /* Timely response to your queries */
    document.getElementById('sales_br_star5').addEventListener('click', (ev) => {
      timely_response_to_queries = 5;
    });
    document.getElementById('sales_br_star4').addEventListener('click', (ev) => {
      timely_response_to_queries = 4;
    });
    document.getElementById('sales_br_star3').addEventListener('click', (ev) => {
      timely_response_to_queries = 3;
    });
    document.getElementById('sales_br_star2').addEventListener('click', (ev) => {
      timely_response_to_queries = 2;
    });
    document.getElementById('sales_br_star1').addEventListener('click', (ev) => {
      timely_response_to_queries = 1;
    });

    /* How effectively has Reverie been able to deliver to your expectations? */
    document.querySelector('#reverie_delivery_expectation1').addEventListener('click', () => {
      document.querySelector('.customer-expectation12').style.display = 'block';
      document.querySelector('.customer-expectation3').style.display = 'none';
      document.querySelector('.customer-expectation45').style.display = 'none';
      document.getElementById('good-text-area').value = '';
      document.getElementById('excellent-text-area').value = '';
    });
    document.querySelector('#reverie_delivery_expectation2').addEventListener('click', () => {
      document.querySelector('.customer-expectation12').style.display = 'block';
      document.querySelector('.customer-expectation3').style.display = 'none';
      document.querySelector('.customer-expectation45').style.display = 'none';
      document.getElementById('good-text-area').value = '';
      document.getElementById('excellent-text-area').value = '';
    });
    document.querySelector('#reverie_delivery_expectation3').addEventListener('click', () => {
      document.querySelector('.customer-expectation3').style.display = 'block';
      document.querySelector('.customer-expectation12').style.display = 'none';
      document.querySelector('.customer-expectation45').style.display = 'none';
      document.getElementById('bad-text-area').value = '';
      document.getElementById('excellent-text-area').value = '';
    });
    document.querySelector('#reverie_delivery_expectation4').addEventListener('click', () => {
      document.querySelector('.customer-expectation12').style.display = 'none';
      document.querySelector('.customer-expectation3').style.display = 'none';
      document.querySelector('.customer-expectation45').style.display = 'block';
      document.getElementById('bad-text-area').value = '';
      document.getElementById('good-text-area').value = '';
    });
    document.querySelector('#reverie_delivery_expectation5').addEventListener('click', () => {
      document.querySelector('.customer-expectation45').style.display = 'block';
      document.querySelector('.customer-expectation12').style.display = 'none';
      document.querySelector('.customer-expectation3').style.display = 'none';
      document.getElementById('bad-text-area').value = '';
      document.getElementById('good-text-area').value = '';
    });

    /* 1. How effectively has Reverie been able to deliver to your expectations? */
    /* Glad to hear this. Which part did you like the most? */
    document.getElementById('reverie_delivery_expectation5').addEventListener('click', () => {
      let allClasses = [reverie_delivery_expectation1, reverie_delivery_expectation2, reverie_delivery_expectation3, reverie_delivery_expectation4];
      expectationThubmRate = 5;
      document.getElementById('reverie_delivery_expectation5').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('reverie_delivery_expectation4').addEventListener('click', () => {
      let allClasses = [reverie_delivery_expectation1, reverie_delivery_expectation2, reverie_delivery_expectation3, reverie_delivery_expectation5];
      expectationThubmRate = 4;
      document.getElementById('reverie_delivery_expectation4').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('reverie_delivery_expectation3').addEventListener('click', () => {
      let allClasses = [reverie_delivery_expectation1, reverie_delivery_expectation2, reverie_delivery_expectation4, reverie_delivery_expectation5];
      expectationThubmRate = 3;
      document.getElementById('reverie_delivery_expectation3').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('reverie_delivery_expectation2').addEventListener('click', () => {
      let allClasses = [reverie_delivery_expectation1, reverie_delivery_expectation3, reverie_delivery_expectation4, reverie_delivery_expectation5];
      expectationThubmRate = 3;
      document.getElementById('reverie_delivery_expectation2').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('reverie_delivery_expectation1').addEventListener('click', () => {
      let allClasses = [reverie_delivery_expectation2, reverie_delivery_expectation3, reverie_delivery_expectation4, reverie_delivery_expectation5];
      expectationThubmRate = 1;
      document.getElementById('reverie_delivery_expectation1').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });

    /* How well did we help you in reducing the time to launch your localized products/services? */
    document.getElementById('launch5').addEventListener('click', () => {
      let allClasses = [launch1, launch2, launch3, launch4];
      reducing_launch_time_for_localized_products = 5;
      document.getElementById('launch5').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('launch4').addEventListener('click', () => {
      let allClasses = [launch1, launch2, launch3, launch5];
      reducing_launch_time_for_localized_products = 4;
      document.getElementById('launch4').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('launch3').addEventListener('click', () => {
      let allClasses = [launch1, launch2, launch4, launch5];
      reducing_launch_time_for_localized_products = 3;
      document.getElementById('launch3').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('launch2').addEventListener('click', () => {
      let allClasses = [launch1, launch3, launch4, launch5];
      reducing_launch_time_for_localized_products = 2;
      document.getElementById('launch2').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('launch1').addEventListener('click', () => {
      let allClasses = [launch2, launch3, launch4, launch5];
      reducing_launch_time_for_localized_products = 1;
      document.getElementById('launch1').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });

    /* Has our team been able to deliver the product/solution as per your expectations and within agreed timelines? */
    document.getElementById('onTimeDelivery5').addEventListener('click', () => {
      let allClasses = [onTimeDelivery1, onTimeDelivery2, onTimeDelivery3, onTimeDelivery4];
      on_time_delivery_rate = 5;
      document.getElementById('onTimeDelivery5').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('onTimeDelivery4').addEventListener('click', () => {
      let allClasses = [onTimeDelivery1, onTimeDelivery2, onTimeDelivery3, onTimeDelivery5];
      on_time_delivery_rate = 4;
      document.getElementById('onTimeDelivery4').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('onTimeDelivery3').addEventListener('click', () => {
      let allClasses = [onTimeDelivery1, onTimeDelivery2, onTimeDelivery4, onTimeDelivery5];
      on_time_delivery_rate = 3;
      document.getElementById('onTimeDelivery3').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('onTimeDelivery2').addEventListener('click', () => {
      let allClasses = [onTimeDelivery1, onTimeDelivery3, onTimeDelivery4, onTimeDelivery5];
      on_time_delivery_rate = 2;
      document.getElementById('onTimeDelivery2').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('onTimeDelivery1').addEventListener('click', () => {
      let allClasses = [onTimeDelivery2, onTimeDelivery3, onTimeDelivery4, onTimeDelivery5];
      on_time_delivery_rate = 1;
      document.getElementById('onTimeDelivery1').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });

    /* Please rate the Reverie team’s overall performance on the following items: */
    /* Skill in delivering solutions: */
    document.getElementById('skill_delivery_solution_star5').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.skill_in_delivering_solutions = 5;
    });
    document.getElementById('skill_delivery_solution_star4').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.skill_in_delivering_solutions = 4;
    });
    document.getElementById('skill_delivery_solution_star3').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.skill_in_delivering_solutions = 3;
    });
    document.getElementById('skill_delivery_solution_star2').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.skill_in_delivering_solutions = 2;
    });
    document.getElementById('skill_delivery_solution_star1').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.skill_in_delivering_solutions = 1;
    });

    /* Responsiveness to your queries: */
    document.getElementById('response_to_query_star5').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.response_to_queries = 5;
    });
    document.getElementById('response_to_query_star4').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.response_to_queries = 4;
    });
    document.getElementById('response_to_query_star3').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.response_to_queries = 3;
    });
    document.getElementById('response_to_query_star2').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.response_to_queries = 2;
    });
    document.getElementById('response_to_query_star1').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.response_to_queries = 1;
    });

    /* Domain expertise: */
    document.getElementById('domain_expertise_star5').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.domain_expertise = 5;
    });
    document.getElementById('domain_expertise_star4').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.domain_expertise = 4;
    });
    document.getElementById('domain_expertise_star3').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.domain_expertise = 3;
    });
    document.getElementById('domain_expertise_star2').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.domain_expertise = 2;
    });
    document.getElementById('domain_expertise_star1').addEventListener('click', (ev) => {
      reverie_teams_overall_performance_rate.domain_expertise = 1;
    });

    /* Would you consider Reverie as your preferred solution provider for your Localization requirements? */
    document.getElementById('preferred_solution_provider5').addEventListener('click', () => {
      let allClasses = [preferred_solution_provider1, preferred_solution_provider2, preferred_solution_provider3, preferred_solution_provider4];
      preferred_solution_provider = 5;
      document.getElementById('preferred_solution_provider5').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('preferred_solution_provider4').addEventListener('click', () => {
      let allClasses = [preferred_solution_provider1, preferred_solution_provider2, preferred_solution_provider3, preferred_solution_provider5];
      preferred_solution_provider = 4;
      document.getElementById('preferred_solution_provider4').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('preferred_solution_provider3').addEventListener('click', () => {
      let allClasses = [preferred_solution_provider1, preferred_solution_provider2, preferred_solution_provider4, preferred_solution_provider5];
      preferred_solution_provider = 3;
      document.getElementById('preferred_solution_provider3').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('preferred_solution_provider2').addEventListener('click', () => {
      let allClasses = [preferred_solution_provider1, preferred_solution_provider3, preferred_solution_provider4, preferred_solution_provider5];
      preferred_solution_provider = 2;
      document.getElementById('preferred_solution_provider2').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('preferred_solution_provider1').addEventListener('click', () => {
      let allClasses = [preferred_solution_provider2, preferred_solution_provider3, preferred_solution_provider4, preferred_solution_provider5];
      preferred_solution_provider = 1;
      document.getElementById('preferred_solution_provider1').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });

    /* How comprehensive and innovative are Reverie’s products related to Indian languages? */
    document.getElementById('innovative5').addEventListener('click', () => {
      let allClasses = [innovative1, innovative2, innovative3, innovative4];
      comprehensive_and_innovative_product_rate = 5;
      document.getElementById('innovative5').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('innovative4').addEventListener('click', () => {
      let allClasses = [innovative1, innovative2, innovative3, innovative5];
      comprehensive_and_innovative_product_rate = 4;
      document.getElementById('innovative4').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('innovative3').addEventListener('click', () => {
      let allClasses = [innovative1, innovative2, innovative4, innovative5];
      comprehensive_and_innovative_product_rate = 3;
      document.getElementById('innovative3').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('innovative2').addEventListener('click', () => {
      let allClasses = [innovative1, innovative3, innovative4, innovative5];
      comprehensive_and_innovative_product_rate = 2;
      document.getElementById('innovative2').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('innovative1').addEventListener('click', () => {
      let allClasses = [innovative2, innovative3, innovative4, innovative5];
      comprehensive_and_innovative_product_rate = 1;
      document.getElementById('innovative1').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });

    /* How effectively does Reverie help your business by sharing best practices related to languages? */
    document.getElementById('best_practices5').addEventListener('click', () => {
      let allClasses = [best_practices1, best_practices2, best_practices3, best_practices4];
      best_business_practices_being_shared_rate = 5;
      document.getElementById('best_practices5').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('best_practices4').addEventListener('click', () => {
      let allClasses = [best_practices1, best_practices2, best_practices3, best_practices5];
      best_business_practices_being_shared_rate = 4;
      document.getElementById('best_practices4').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('best_practices3').addEventListener('click', () => {
      let allClasses = [best_practices1, best_practices2, best_practices4, best_practices5];
      best_business_practices_being_shared_rate = 3;
      document.getElementById('best_practices3').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('best_practices2').addEventListener('click', () => {
      let allClasses = [best_practices1, best_practices3, best_practices4, best_practices5];
      best_business_practices_being_shared_rate = 2;
      document.getElementById('best_practices2').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('best_practices1').addEventListener('click', () => {
      let allClasses = [best_practices2, best_practices3, best_practices4, best_practices5];
      best_business_practices_being_shared_rate = 1;
      document.getElementById('best_practices1').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });

    /* Have you experienced our translation services? */
    /* Please rate our translations based on: */
    /* Quality of translation: */
    document.getElementById('translation_quality_star5').addEventListener('click', (ev) => {
      translation_services_experience_rate.quality_of_translation = 5;
    });
    document.getElementById('translation_quality_star4').addEventListener('click', (ev) => {
      translation_services_experience_rate.quality_of_translation = 4;
    });
    document.getElementById('translation_quality_star3').addEventListener('click', (ev) => {
      translation_services_experience_rate.quality_of_translation = 3;
    });
    document.getElementById('translation_quality_star2').addEventListener('click', (ev) => {
      translation_services_experience_rate.quality_of_translation = 2;
    });
    document.getElementById('translation_quality_star1').addEventListener('click', (ev) => {
      translation_services_experience_rate.quality_of_translation = 1;
    });

    /* Time taken for translation: */
    document.getElementById('time_taken_star5').addEventListener('click', (ev) => {
      translation_services_experience_rate.time_taken_for_translation = 5;
    });
    document.getElementById('time_taken_star4').addEventListener('click', (ev) => {
      translation_services_experience_rate.time_taken_for_translation = 4;
    });
    document.getElementById('time_taken_star3').addEventListener('click', (ev) => {
      translation_services_experience_rate.time_taken_for_translation = 3;
    });
    document.getElementById('time_taken_star2').addEventListener('click', (ev) => {
      translation_services_experience_rate.time_taken_for_translation = 2;
    });
    document.getElementById('time_taken_star1').addEventListener('click', (ev) => {
      translation_services_experience_rate.time_taken_for_translation = 1;
    });

    /* Ability to understand your domain: */
    document.getElementById('ability_star5').addEventListener('click', (ev) => {
      translation_services_experience_rate.ability_to_understand_domain = 5;
    });
    document.getElementById('ability_star4').addEventListener('click', (ev) => {
      translation_services_experience_rate.ability_to_understand_domain = 4;
    });
    document.getElementById('ability_star3').addEventListener('click', (ev) => {
      translation_services_experience_rate.ability_to_understand_domain = 3;
    });
    document.getElementById('ability_star2').addEventListener('click', (ev) => {
      translation_services_experience_rate.ability_to_understand_domain = 2;
    });
    document.getElementById('ability_star1').addEventListener('click', (ev) => {
      translation_services_experience_rate.ability_to_understand_domain = 1;
    });

    /* Have you had any interaction with our engineering and product specialist teams? */
    /* How timely was the engineering and product specialists in solving your queries? */
    document.getElementById('product_support5').addEventListener('click', () => {
      let allClasses = [product_support1, product_support2, product_support3, product_support4];
      interaction_with_product_specialist = 5;
      document.getElementById('product_support5').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('product_support4').addEventListener('click', () => {
      let allClasses = [product_support1, product_support2, product_support3, product_support5];
      interaction_with_product_specialist = 4;
      document.getElementById('product_support4').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('product_support3').addEventListener('click', () => {
      let allClasses = [product_support1, product_support2, product_support4, product_support5];
      interaction_with_product_specialist = 3;
      document.getElementById('product_support3').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('product_support2').addEventListener('click', () => {
      let allClasses = [product_support1, product_support3, product_support4, product_support5];
      interaction_with_product_specialist = 2;
      document.getElementById('product_support2').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });
    document.getElementById('product_support1').addEventListener('click', () => {
      let allClasses = [product_support2, product_support3, product_support4, product_support5];
      interaction_with_product_specialist = 1;
      document.getElementById('product_support1').classList.add('t1');
      allClasses.forEach(el => {
        el.classList.remove('t1');
      });
    });

    /* Please rate the effectiveness of our Products/solutions in resolving your problems */
    document.getElementById('engagement-star5').addEventListener('click', () => {
      product_effectiveness_rate = 5;
    });
    document.getElementById('engagement-star4').addEventListener('click', () => {
      product_effectiveness_rate = 4;
    });
    document.getElementById('engagement-star3').addEventListener('click', () => {
      product_effectiveness_rate = 3;
    });
    document.getElementById('engagement-star2').addEventListener('click', () => {
      product_effectiveness_rate = 2;
    });
    document.getElementById('engagement-star1').addEventListener('click', () => {
      product_effectiveness_rate = 1;
    });

    /* Partners & Alliances */

    $(document).ready(() => {
      /* How well has Reverie been able to deliver to your expectations from the partnership? */
      $('#expectations5').click(() => {
        let allClasses = [expectations1, expectations2, expectations3, expectations4];
        ability_to_deliver_expectation = 5;
          $('#expectations5').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#expectations4').click(() => {
        let allClasses = [expectations1, expectations2, expectations3, expectations5];
        ability_to_deliver_expectation = 4;
          $('#expectations4').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#expectations3').click(() => {
        let allClasses = [expectations1, expectations2, expectations4, expectations5];
        ability_to_deliver_expectation = 3;
          $('#expectations3').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#expectations2').click(() => {
        let allClasses = [expectations1, expectations3, expectations4, expectations5];
        ability_to_deliver_expectation = 2;
          $('#expectations2').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#expectations1').click(() => {
        let allClasses = [expectations2, expectations3, expectations4, expectations5];
        ability_to_deliver_expectation = 1;
          $('#expectations1').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
        document.querySelector('#expectations1').addEventListener('click', () => {
        document.querySelector('.partner-expectation12').style.display = 'block';
        document.querySelector('.partner-expectation3').style.display = 'none';
        document.querySelector('.partner-expectation45').style.display = 'none';
        document.getElementById('text_area3').value = '';
        document.getElementById('text_area45').value = '';
      });
      document.querySelector('#expectations2').addEventListener('click', () => {
        document.querySelector('.partner-expectation12').style.display = 'block';
        document.querySelector('.partner-expectation3').style.display = 'none';
        document.querySelector('.partner-expectation45').style.display = 'none';
        document.getElementById('text_area3').value = '';
        document.getElementById('text_area45').value = '';
      });
      document.querySelector('#expectations3').addEventListener('click', () => {
        document.querySelector('.partner-expectation3').style.display = 'block';
        document.querySelector('.partner-expectation12').style.display = 'none';
        document.querySelector('.partner-expectation45').style.display = 'none';
        document.getElementById('text_area12').value = '';
        document.getElementById('text_area45').value = '';
      });
      document.querySelector('#expectations4').addEventListener('click', () => {
        document.querySelector('.partner-expectation12').style.display = 'none';
        document.querySelector('.partner-expectation3').style.display = 'none';
        document.querySelector('.partner-expectation45').style.display = 'block';
        document.getElementById('text_area12').value = '';
        document.getElementById('text_area3').value = '';
      });
      document.querySelector('#expectations5').addEventListener('click', () => {
        document.querySelector('.partner-expectation45').style.display = 'block';
        document.querySelector('.partner-expectation12').style.display = 'none';
        document.querySelector('.partner-expectation3').style.display = 'none';
        document.getElementById('text_area12').value = '';
        document.getElementById('text_area3').value = '';
      });


      /* How well did our products/solutions help you/your customers reduce the time to launch localized products/services? */
      $('#reduce_time5').click(() => {
        let allClasses = [reduce_time1, reduce_time2, reduce_time3, reduce_time4];
        time_reduced_in_product_launch = 5;
        $('#reduce_time5').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#reduce_time4').click(() => {
        let allClasses = [reduce_time1, reduce_time2, reduce_time3, reduce_time5];
        time_reduced_in_product_launch = 4;
        $('#reduce_time4').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#reduce_time3').click(() => {
        let allClasses = [reduce_time1, reduce_time2, reduce_time4, reduce_time5];
        time_reduced_in_product_launch = 3;
        $('#reduce_time3').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#reduce_time2').click(() => {
        let allClasses = [reduce_time1, reduce_time3, reduce_time4, reduce_time5];
        time_reduced_in_product_launch = 2;
        $('#reduce_time2').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#reduce_time1').click(() => {
        let allClasses = [reduce_time2, reduce_time3, reduce_time4, reduce_time5];
        time_reduced_in_product_launch = 1;
        $('#reduce_time1').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })

      /* Please rate the effectiveness of our solutions in resolving your client needs & problems. */
      $('#effectiveness_star5').click(() => {
        rate_of_product_effictiveness = 5;
      })
      $('#effectiveness_star4').click(() => {
        rate_of_product_effictiveness = 4;
      })
      $('#effectiveness_star3').click(() => {
        rate_of_product_effictiveness = 3;
      })
      $('#effectiveness_star2').click(() => {
        rate_of_product_effictiveness = 2;
      })
      $('#effectiveness_star1').click(() => {
        rate_of_product_effictiveness = 1;
      })

      /* Did we support you effectively to engage with clients & provide faster response than your usual sales cycle? */
      $('#client_support_rate5').click(() => {
        let allClasses = [client_support_rate1, client_support_rate2, client_support_rate3, client_support_rate4];
        client_suppurt_cycle_rate = 5;
        $('#client_support_rate5').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#client_support_rate4').click(() => {
        let allClasses = [client_support_rate1, client_support_rate2, client_support_rate3, client_support_rate5];
        client_suppurt_cycle_rate = 4;
        $('#client_support_rate4').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#client_support_rate3').click(() => {
        let allClasses = [client_support_rate1, client_support_rate2, client_support_rate4, client_support_rate5];
        client_suppurt_cycle_rate = 3;
        $('#client_support_rate3').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#client_support_rate2').click(() => {
        let allClasses = [client_support_rate1, client_support_rate3, client_support_rate4, client_support_rate5];
        client_suppurt_cycle_rate = 2;
        $('#client_support_rate2').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#client_support_rate1').click(() => {
        let allClasses = [client_support_rate2, client_support_rate3, client_support_rate4, client_support_rate5];
        client_suppurt_cycle_rate = 1;
        $('#client_support_rate1').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })

      /* Does our training help you in mapping the right solution for different use cases and effectively engage with your clients? */
      $('#training_support5').click(() => {
        let allClasses = [training_support1, training_support2, training_support3, training_support4];
        training_support_to_clients = 5;
        $('#training_support5').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#training_support4').click(() => {
        let allClasses = [training_support1, training_support2, training_support3, training_support5];
        training_support_to_clients = 4;
        $('#training_support4').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#training_support3').click(() => {
        let allClasses = [training_support1, training_support2, training_support4, training_support5];
        training_support_to_clients = 3;
        $('#training_support3').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#training_support2').click(() => {
        let allClasses = [training_support1, training_support3, training_support4, training_support5];
        training_support_to_clients = 2;
        $('#training_support2').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#training_support1').click(() => {
        let allClasses = [training_support2, training_support3, training_support4, training_support5];
        training_support_to_clients = 1;
        $('#training_support1').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      document.querySelector('#training_support1').addEventListener('click', () => {
        document.querySelector('.training_help12').style.display = 'block';
        document.querySelector('.training_help3').style.display = 'none';
        document.querySelector('.training_help45').style.display = 'none';
        document.getElementById('help_text_area3').value = '';
        document.getElementById('help_text_area45').value = '';
      });
      document.querySelector('#training_support2').addEventListener('click', () => {
        document.querySelector('.training_help12').style.display = 'block';
        document.querySelector('.training_help3').style.display = 'none';
        document.querySelector('.training_help45').style.display = 'none';
        document.getElementById('help_text_area3').value = '';
        document.getElementById('help_text_area45').value = '';
      });
      document.querySelector('#training_support3').addEventListener('click', () => {
        document.querySelector('.training_help3').style.display = 'block';
        document.querySelector('.training_help12').style.display = 'none';
        document.querySelector('.training_help45').style.display = 'none';
        document.getElementById('help_text_area12').value = '';
        document.getElementById('help_text_area45').value = '';
      });
      document.querySelector('#training_support4').addEventListener('click', () => {
        document.querySelector('.training_help12').style.display = 'none';
        document.querySelector('.training_help3').style.display = 'none';
        document.querySelector('.training_help45').style.display = 'block';
        document.getElementById('help_text_area12').value = '';
        document.getElementById('help_text_area3').value = '';
      });
      document.querySelector('#training_support5').addEventListener('click', () => {
        document.querySelector('.training_help45').style.display = 'block';
        document.querySelector('.training_help12').style.display = 'none';
        document.querySelector('.training_help3').style.display = 'none';
        document.getElementById('help_text_area12').value = '';
        document.getElementById('help_text_area3').value = '';
      });

      /* Have we provided you relevant collaterals & effective demos to ensure sales effectiveness in building a better sales pipeline? */
      $('#sales_pipeline5').click(() => {
        let allClasses = [sales_pipeline1, sales_pipeline2, sales_pipeline3, sales_pipeline4];
        relevant_collaterals_and_effective_demos = 5;
        $('#sales_pipeline5').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#sales_pipeline4').click(() => {
        let allClasses = [sales_pipeline1, sales_pipeline2, sales_pipeline3, sales_pipeline5];
        relevant_collaterals_and_effective_demos = 4;
        $('#sales_pipeline4').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#sales_pipeline3').click(() => {
        let allClasses = [sales_pipeline1, sales_pipeline2, sales_pipeline4, sales_pipeline5];
        relevant_collaterals_and_effective_demos = 3;
        $('#sales_pipeline3').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#sales_pipeline2').click(() => {
        let allClasses = [sales_pipeline1, sales_pipeline3, sales_pipeline4, sales_pipeline5];
        relevant_collaterals_and_effective_demos = 2;
        $('#sales_pipeline2').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#sales_pipeline1').click(() => {
        let allClasses = [sales_pipeline2, sales_pipeline3, sales_pipeline4, sales_pipeline5];
        relevant_collaterals_and_effective_demos = 1;
        $('#sales_pipeline1').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })

      /* Please rate our engagement with your team in effectively working on opportunities & pipeline */
      $('#pipeline_star5').click(() => {
        engagement_with_teams_rate = 5;
      })
      $('#pipeline_star4').click(() => {
        engagement_with_teams_rate = 4;
      })
      $('#pipeline_star3').click(() => {
        engagement_with_teams_rate = 3;
      })
      $('#pipeline_star2').click(() => {
        engagement_with_teams_rate = 2;
      })
      $('#pipeline_star1').click(() => {
        engagement_with_teams_rate = 1;
      })

      /* Please rate the Reverie team on the following parameters: */
      /* Insights related to the industry: */
      $('#insights_star5').click(() => {
        reverie_team_rate.insights_related_to_industry = 5;
      })
      $('#insights_star4').click(() => {
        reverie_team_rate.insights_related_to_industry = 4;
      })
      $('#insights_star3').click(() => {
        reverie_team_rate.insights_related_to_industry = 3;
      })
      $('#insights_star2').click(() => {
        reverie_team_rate.insights_related_to_industry = 2;
      })
      $('#insights_star1').click(() => {
        reverie_team_rate.insights_related_to_industry = 1;
      })

      /* Responsiveness to your queries: */
      $('#queries_star5').click(() => {
        reverie_team_rate.response_to_queries = 5;
      })
      $('#queries_star4').click(() => {
        reverie_team_rate.response_to_queries = 4;
      })
      $('#queries_star3').click(() => {
        reverie_team_rate.response_to_queries = 3;
      })
      $('#queries_star2').click(() => {
        reverie_team_rate.response_to_queries = 2;
      })
      $('#queries_star1').click(() => {
        reverie_team_rate.response_to_queries = 1;
      })

      /* Domain expertise: */
      $('#domain_star5').click(() => {
        reverie_team_rate.domail_expertise = 5;
      })
      $('#domain_star4').click(() => {
        reverie_team_rate.domail_expertise = 4;
      })
      $('#domain_star3').click(() => {
        reverie_team_rate.domail_expertise = 3;
      })
      $('#domain_star2').click(() => {
        reverie_team_rate.domail_expertise = 2;
      })
      $('#domain_star1').click(() => {
        reverie_team_rate.domail_expertise = 1;
      })

      /* How effective has Reverie’s portfolio been in helping you offer a complete package of products/solutions to your clients? */
      $('#portfolio_rate5').click(() => {
        let allClasses = [portfolio_rate1, portfolio_rate2, portfolio_rate3, portfolio_rate4];
        reverie_portfolio_help_rate = 5;
        $('#portfolio_rate5').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#portfolio_rate4').click(() => {
        let allClasses = [portfolio_rate1, portfolio_rate2, portfolio_rate3, portfolio_rate5];
        reverie_portfolio_help_rate = 4;
        $('#portfolio_rate4').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#portfolio_rate3').click(() => {
        let allClasses = [portfolio_rate1, portfolio_rate2, portfolio_rate4, portfolio_rate5];
        reverie_portfolio_help_rate = 3;
        $('#portfolio_rate3').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#portfolio_rate2').click(() => {
        let allClasses = [portfolio_rate1, portfolio_rate3, portfolio_rate4, portfolio_rate5];
        reverie_portfolio_help_rate = 2;
        $('#portfolio_rate2').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#portfolio_rate1').click(() => {
        let allClasses = [portfolio_rate2, portfolio_rate3, portfolio_rate4, portfolio_rate5];
        reverie_portfolio_help_rate = 1;
        $('#portfolio_rate1').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })

      /* How likely are you to recommend Reverie for any Language localization requirements for your clients? */
      $('#recommend_rate5').click(() => {
        let allClasses = [recommend_rate1, recommend_rate2, recommend_rate3, recommend_rate4];
        recommenr_reverie_for_localization_rate = 5;
        $('#recommend_rate5').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#recommend_rate4').click(() => {
        let allClasses = [recommend_rate1, recommend_rate2, recommend_rate3, recommend_rate5];
        recommenr_reverie_for_localization_rate = 4;
        $('#recommend_rate4').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#recommend_rate3').click(() => {
        let allClasses = [recommend_rate1, recommend_rate2, recommend_rate4, recommend_rate5];
        recommenr_reverie_for_localization_rate = 3;
        $('#recommend_rate3').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#recommend_rate2').click(() => {
        let allClasses = [recommend_rate1, recommend_rate3, recommend_rate4, recommend_rate5];
        recommenr_reverie_for_localization_rate = 2;
        $('#recommend_rate2').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#recommend_rate1').click(() => {
        let allClasses = [recommend_rate2, recommend_rate3, recommend_rate4, recommend_rate5];
        recommenr_reverie_for_localization_rate = 1;
        $('#recommend_rate1').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })

      /* Would you agree that Reverie offers the most comprehensive and innovative product portfolio related to Indian languages? */
      $('#offers_rate5').click(() => {
        let allClasses = [offers_rate1, offers_rate2, offers_rate3, offers_rate4];
        reverie_offer_rate = 5;
        $('#offers_rate5').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#offers_rate4').click(() => {
        let allClasses = [offers_rate1, offers_rate2, offers_rate3, offers_rate5];
        reverie_offer_rate = 4;
        $('#offers_rate4').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#offers_rate3').click(() => {
        let allClasses = [offers_rate1, offers_rate2, offers_rate4, offers_rate5];
        reverie_offer_rate = 3;
        $('#offers_rate3').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#offers_rate2').click(() => {
        let allClasses = [offers_rate1, offers_rate3, offers_rate4, offers_rate5];
        reverie_offer_rate = 2;
        $('#offers_rate2').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })
      $('#offers_rate1').click(() => {
        let allClasses = [offers_rate2, offers_rate3, offers_rate4, offers_rate5];
        reverie_offer_rate = 1;
        $('#offers_rate1').addClass('t1');
            allClasses.forEach(el => {
            el.classList.remove('t1');
          });
      })

      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    });


    async function senddata(feedbackValues) {
      // debugger;
      fetch("http://192.168.1.100:5000/api/feedback", { 
          method: "POST",
          body: JSON.stringify(feedbackValues),
          headers: { 
              "Content-type": "application/json"
          } 
      }) 
        
      // Converting to JSON 
      .then(response => console.log(response)) 
        
      // Displaying results to console 
      // .then(json => console.log(json));

    }


    const generateFeedback = (ev) => {
      ev.preventDefault();

      let feedback = {
        date: Date.now(),
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        userType: currentUser,
        engagement_with_reverie,
        product_effectiveness_rate,
        refer_reverie_to_other,
        among_top3_companies,
        understanding_business_problem,
        solution_for_business,
        timely_response_to_queries,
      };
      if (feedback.name === '') {
        document.getElementById('name').focus();
        return toastr.warning('Name is required');
      }
      if (feedback.email === '') {
        document.getElementById('email').focus();
        return toastr.warning('E-mail is required');
      }
      if (!mailformat.test(feedback.email)) {
        document.getElementById('email').focus();
        return toastr.warning('Provide a valid e-mail ID');
      }
      if (currentUser === 'customer') {
        if (expectationThubmRate === 5 || expectationThubmRate === 4) {
          delivery_expectation.rating = expectationThubmRate;
          delivery_expectation.reverie_delivery_expectation_comment = document.getElementById('excellent-text-area').value;
        }
        if (expectationThubmRate === 3) {
          delivery_expectation.rating = expectationThubmRate;
          delivery_expectation.reverie_delivery_expectation_comment = document.getElementById('good-text-area').value;
        }
        if (expectationThubmRate === 2 || expectationThubmRate === 1) {
          delivery_expectation.rating = expectationThubmRate;
          delivery_expectation.reverie_delivery_expectation_comment = document.getElementById('bad-text-area').value;
        }

        feedback.reverie_delivery_expectation = delivery_expectation;
        feedback.reducing_launch_time_for_localized_products = reducing_launch_time_for_localized_products;
        feedback.on_time_delivery_rate = on_time_delivery_rate;
        feedback.reverie_teams_overall_performance_rate = reverie_teams_overall_performance_rate;
        feedback.preferred_solution_provider = preferred_solution_provider;
        feedback.comprehensive_and_innovative_product_rate = comprehensive_and_innovative_product_rate;
        feedback.best_business_practices_being_shared_rate = best_business_practices_being_shared_rate;
        feedback.translation_services_experience_rate = translation_services_experience_rate;
        feedback.interaction_with_product_specialist = interaction_with_product_specialist;
        feedback.additional_suggestion = document.getElementById('additional_suggestion').value;
        feedback.few_words_of_encouragement = document.getElementById('encouragement').value;
        feedback.testimonials_to_be_used_for_website = customerChecked;
      }
      if (currentUser === 'partner') {
        if (ability_to_deliver_expectation === 4 || ability_to_deliver_expectation === 5) {
          partner_expectation.rating = ability_to_deliver_expectation;
          partner_expectation.reverie_partner_expectation_comment = document.getElementById('text_area45').value;
        }
        if (ability_to_deliver_expectation === 3) {
          partner_expectation.rating = ability_to_deliver_expectation;
          partner_expectation.reverie_partner_expectation_comment = document.getElementById('text_area3').value;
        }
        if (ability_to_deliver_expectation === 2 || ability_to_deliver_expectation === 1) {
          partner_expectation.rating = ability_to_deliver_expectation;
          partner_expectation.reverie_partner_expectation_comment = document.getElementById('text_area12').value;
        }
        if (training_support_to_clients === 4 || training_support_to_clients === 5) {
          reverie_training_support_to_clients.rating = training_support_to_clients;
          reverie_training_support_to_clients.reverie_reverie_training_support_to_clients_comment = document.getElementById('help_text_area45').value;
        }
        if (training_support_to_clients === 3) {
          reverie_training_support_to_clients.rating = training_support_to_clients;
          reverie_training_support_to_clients.reverie_reverie_training_support_to_clients_comment = document.getElementById('help_text_area3').value;
        }
        if (training_support_to_clients === 2 || training_support_to_clients === 1) {
          reverie_training_support_to_clients.rating = training_support_to_clients;
          reverie_training_support_to_clients.reverie_reverie_training_support_to_clients_comment = document.getElementById('help_text_area12').value;
        }
        feedback.partner_delivery_expectation = partner_expectation;
        feedback.time_reduced_in_product_launch = time_reduced_in_product_launch;
        feedback.rate_of_product_effictiveness = rate_of_product_effictiveness;
        feedback.client_suppurt_cycle_rate = client_suppurt_cycle_rate;
        feedback.reverie_training_support_to_clients = reverie_training_support_to_clients;
        feedback.relevant_collaterals_and_effective_demos  = relevant_collaterals_and_effective_demos;
        feedback.engagement_with_teams_rate = engagement_with_teams_rate;
        feedback.reverie_team_rate = reverie_team_rate;
        feedback.reverie_portfolio_help_rate = reverie_portfolio_help_rate;
        feedback.recommenr_reverie_for_localization_rate = recommenr_reverie_for_localization_rate;
        feedback.reverie_offer_rate = reverie_offer_rate;
        feedback.partner_additional_suggestion = document.getElementById('partner_comment').value;
        feedback.partner_few_words_of_encouragement = document.getElementById('partner_words_of_encouragement').value;
        feedback.partner_testimonials_to_be_used_for_website = partnerChecked 
      }
      feedbackValues.push(feedback);
      senddata(feedbackValues);

      document.querySelector('form').reset();

      console.log('Added-->', {feedbackValues});

      let pre  = document.querySelector('#msg pre');
      pre.textContent = '\n' + JSON.stringify(feedbackValues, '\t', 2);

      console.log(engagement_with_reverie);

      if (engagement_with_reverie) {
        document.getElementById('engagement' + engagement_with_reverie).classList.remove('t1');
      }
      if (refer_reverie_to_other) {
        document.getElementById('refer_reverie' + refer_reverie_to_other).classList.remove('t1');
      }
      if (among_top3_companies) {
        document.getElementById('top' + among_top3_companies).classList.remove('t1');
      }
      if (expectationThubmRate) {
        document.getElementById('reverie_delivery_expectation' + expectationThubmRate).classList.remove('t1');
      }
      if (reducing_launch_time_for_localized_products) {
        document.getElementById('launch' + reducing_launch_time_for_localized_products).classList.remove('t1');
      }
      if (on_time_delivery_rate) {
        document.getElementById('onTimeDelivery' + on_time_delivery_rate).classList.remove('t1');
      }
      if (interaction_with_product_specialist) {
        document.getElementById('product_support' + interaction_with_product_specialist).classList.remove('t1');
      }
      if (preferred_solution_provider) {
        document.getElementById('preferred_solution_provider' + preferred_solution_provider).classList.remove('t1');
      }
      if (comprehensive_and_innovative_product_rate) {
        document.getElementById('innovative' + comprehensive_and_innovative_product_rate).classList.remove('t1');
      }
      if (best_business_practices_being_shared_rate) {
        document.getElementById('best_practices' + best_business_practices_being_shared_rate).classList.remove('t1');
      }

      if (ability_to_deliver_expectation) {
        document.getElementById('expectations' + ability_to_deliver_expectation).classList.remove('t1');
      }
      if (time_reduced_in_product_launch) {
        document.getElementById('reduce_time' + time_reduced_in_product_launch).classList.remove('t1');
      }
      if (client_suppurt_cycle_rate) {
        document.getElementById('client_support_rate' + client_suppurt_cycle_rate).classList.remove('t1');
      }
      if (training_support_to_clients) {
        document.getElementById('training_support' + training_support_to_clients).classList.remove('t1');
      }
      if (relevant_collaterals_and_effective_demos) {
        document.getElementById('sales_pipeline' + relevant_collaterals_and_effective_demos).classList.remove('t1');
      }
      if (reverie_portfolio_help_rate) {
        document.getElementById('portfolio_rate' + reverie_portfolio_help_rate).classList.remove('t1');
      }
      if (recommenr_reverie_for_localization_rate) {
        document.getElementById('recommend_rate' + recommenr_reverie_for_localization_rate).classList.remove('t1');
      }
      if (reverie_offer_rate) {
        document.getElementById('offers_rate' + reverie_offer_rate).classList.remove('t1');
      }

      engagement_with_reverie = '',
      product_effectiveness_rate = '',
      refer_reverie_to_other = '',
      among_top3_companies = '',
      understanding_business_problem = '',
      solution_for_business = '',
      timely_response_to_queries = ''

      return toastr.success('Feedback sent successfully');
    }

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('btn').addEventListener('click', generateFeedback);
    });










