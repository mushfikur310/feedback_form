const express = require('express');
const ExcelJS = require('exceljs');
const moment = require('moment');

const router = express.Router();


// @route   POST api/feedback
// @desc    Feedback generator
// @access  Public
router.post('/', async (req, res) => {
    debugger;
    try {
        const workBook = new ExcelJS.Workbook();
        const workSheet = workBook.addWorksheet('User feedback');
        console.log(req.body[0].userType);
        console.log(req.body);
        if (req.body[0].userType === 'customer') {
            workSheet.columns = [
                {header: 'Date', key: 'date', width: '10'},
                {header: 'E-mail ID', key: 'email', width: '30'},
                {header: 'Name', key: 'name', width: '30'},
                {header: 'engagement_with_reverie', key: 'engagement_with_reverie', width: '30'},
                {header: 'product_effectiveness_rate', key: 'product_effectiveness_rate', width: '30'},
                {header: 'refer_reverie_to_other', key: 'refer_reverie_to_other', width: '30'},
                {header: 'among_top3_companies', key: 'among_top3_companies', width: '30'},
                {header: 'understanding_business_problem', key: 'understanding_business_problem', width: '30'},
                {header: 'solution_for_business', key: 'solution_for_business', width: '30'},
                {header: 'timely_response_to_queries', key: 'timely_response_to_queries', width: '30'},
                {header: 'reverie_delivery_expectation_rating', key: 'reverie_delivery_expectation_rating', width: '30'},
                {header: 'reverie_delivery_expectation_comment', key: 'reverie_delivery_expectation_comment', width: '30'},
                {header: 'reducing_launch_time_for_localized_products', key: 'reducing_launch_time_for_localized_products', width: '30'},
                {header: 'on_time_delivery_rate', key: 'on_time_delivery_rate', width: '30'},
                {header: 'reverie_teams_overall_performance_rate_in_skill_in_delivering_solutions', key: 'reverie_teams_overall_performance_rate_in_skill_in_delivering_solutions', width: '30'},
                {header: 'reverie_teams_overall_performance_rate_in_response_to_queries', key: 'reverie_teams_overall_performance_rate_in_response_to_queries', width: '30'},
                {header: 'reverie_teams_overall_performance_rate_in_domain_expertise', key: 'reverie_teams_overall_performance_rate_in_domain_expertise', width: '30'},
                {header: 'preferred_solution_provider', key: 'preferred_solution_provider', width: '30'},
                {header: 'comprehensive_and_innovative_product_rate', key: 'comprehensive_and_innovative_product_rate', width: '30'},
                {header: 'best_business_practices_being_shared_rate', key: 'best_business_practices_being_shared_rate', width: '30'},
                {header: 'translation_services_experience_rate_in_quality_of_translation', key: 'translation_services_experience_rate_in_quality_of_translation', width: '30'},
                {header: 'translation_services_experience_rate_in_time_taken_for_translation', key: 'translation_services_experience_rate_in_time_taken_for_translation', width: '30'},
                {header: 'translation_services_experience_rate_in_ability_to_understand_domain', key: 'translation_services_experience_rate_in_ability_to_understand_domain', width: '30'},
                {header: 'interaction_with_product_specialist', key: 'interaction_with_product_specialist', width: '30'},
                {header: 'additional_suggestion', key: 'additional_suggestion', width: '30'},
                {header: 'few_words_of_encouragement', key: 'few_words_of_encouragement', width: '30'},
                {header: 'testimonials_to_be_used_for_website', key: 'testimonials_to_be_used_for_website', width: '30'}
            ];
        }
        req.body.map(elem => {
            elem.date = moment(elem.date).format('l');
            workSheet.addRow(elem);
        });

        const data = await workBook.xlsx.writeFile('feedback.xlsx');
        res.send('Done');
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;