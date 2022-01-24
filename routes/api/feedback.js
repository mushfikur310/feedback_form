const express = require('express');
const db = require('../../config/db');

const router = express.Router();
const allKeys = require("../../config/allKeys")

// @route   POST api/feedback
// @desc    Feedback generator
// @access  Public
router.post('/', async (req, res) => {
    debugger;
    try { 
        let dbc = await db.dbConn();
        let feedbackObj = { 
            name: req.body.intro.name.answer,
            email: req.body.intro.email.answer,
            role: req.body.intro.role.answer
        };
        let qna = []
        if(feedbackObj.role === "partner"){
            Object.keys(req.body.partnerStepOne).forEach(key => {
                if(key === "additionalComment"){
                    let qnaCommentObj = {
                        key,
                        question : allKeys[`partnerStepOne_${key}`] ? allKeys[`partnerStepOne_${key}`] : key,
                        type: "comment",
                        answer: req.body.partnerStepOne[key]["answer"]?req.body.partnerStepOne[key]["answer"]:"No Comment"
                    }
                    qna.push(qnaCommentObj)
                    return
                }
                let qnaScoreObj = {}
                if(req.body.partnerStepOne[key]["answer"]){
                    qnaScoreObj={
                        key,
                        question : allKeys[`partnerStepOne_${key}`],
                        type: "score",
                        answer: parseInt(req.body.partnerStepOne[key]["answer"])
                    }
                    qna.push(qnaScoreObj)
                }
                let qnaCommentObj = {
                    key,
                    question : allKeys[`partnerStepOne_${key}`] ? allKeys[`partnerStepOne_${key}`] : key,
                    type: "comment",
                    answer: req.body.partnerStepOne[key]["comment"]?req.body.partnerStepOne[key]["comment"]:"No Comment"
                }
                
                qna.push(qnaCommentObj)
            })
        }
        if(feedbackObj.role === "customer"){

            Object.keys(req.body.customerStepOne).forEach(key => {
                if(key === "additionalComment"){
                    let qnaCommentObj = {
                        key,
                        question : allKeys[`customerStepOne_${key}`] ? allKeys[`customerStepOne_${key}`] : key,
                        type: "comment",
                        answer: req.body.customerStepOne[key]["answer"]?req.body.customerStepOne[key]["answer"]:"No Comment"
                    }
                    qna.push(qnaCommentObj)
                    return
                }
                let qnaScoreObj = {}
                if(req.body.customerStepOne[key]["answer"]){
                    qnaScoreObj={
                        key,
                        question : allKeys[`customerStepOne_${key}`],
                        type: "score",
                        answer: parseInt(req.body.customerStepOne[key]["answer"])
                    }
                    qna.push(qnaScoreObj)
                }
                let qnaCommentObj = {
                    key,
                    question : allKeys[`customerStepOne_${key}`] ? allKeys[`customerStepOne_${key}`] : key,
                    type: "comment",
                    answer: req.body.customerStepOne[key]["comment"]?req.body.customerStepOne[key]["comment"]:"No Comment"
                }
                
                qna.push(qnaCommentObj)
            })
            Object.keys(req.body.customerStepTwo).forEach(key => {
                if(key === "additionalComment"){
                    let qnaCommentObj = {
                        key,
                        question : allKeys[`customerStepTwo_${key}`] ? allKeys[`customerStepTwo_${key}`] : key,
                        type: "comment",
                        answer: req.body.customerStepTwo[key]["answer"]?req.body.customerStepTwo[key]["answer"]:"No Comment"
                    }
                    qna.push(qnaCommentObj)
                    return
                }
                let qnaScoreObj = {}
                if(req.body.customerStepTwo[key]["answer"]){
                    qnaScoreObj={
                        key,
                        question : allKeys[`customerStepTwo_${key}`],
                        type: "score",
                        answer: parseInt(req.body.customerStepTwo[key]["answer"])
                    }
                    qna.push(qnaScoreObj)
                }
                let qnaCommentObj = {
                    key,
                    question : allKeys[`customerStepTwo_${key}`] ? allKeys[`customerStepTwo_${key}`] : key,
                    type: "comment",
                    answer: req.body.customerStepTwo[key]["comment"]?req.body.customerStepTwo[key]["comment"]:"No Comment"
                }
                
                qna.push(qnaCommentObj)
            })
            Object.keys(req.body.customerStepThree).forEach(key => {
                if(key === "additionalComment"){
                    let qnaCommentObj = {
                        key,
                        question : allKeys[`customerStepThree_${key}`] ? allKeys[`customerStepThree_${key}`] : key,
                        type: "comment",
                        answer: req.body.customerStepThree[key]["answer"]?req.body.customerStepThree[key]["answer"]:"No Comment"
                    }
                    qna.push(qnaCommentObj)
                    return
                }
                let qnaScoreObj = {}
                if(req.body.customerStepThree[key]["answer"]){
                    qnaScoreObj={
                        key,
                        question : allKeys[`customerStepThree_${key}`],
                        type: "score",
                        answer: parseInt(req.body.customerStepThree[key]["answer"])
                    }
                    qna.push(qnaScoreObj)
                }
                let qnaCommentObj = {
                    key,
                    question : allKeys[`customerStepThree_${key}`] ? allKeys[`customerStepThree_${key}`] : key,
                    type: "comment",
                    answer: req.body.customerStepThree[key]["comment"]?req.body.customerStepThree[key]["comment"]:"No Comment"
                }
                
                qna.push(qnaCommentObj)
            })

        }
        feedbackObj["qna"] = qna

        let insert  = await dbc.collection('2022_feedback').insertOne(feedbackObj);
        res.json({success: true, msg: 'Feedback has been submitted successfully'});        
    } catch (err) {
        console.error(err.message);
        res.send({
            success: false,
            msg: err.message
        });
    }
});

module.exports = router;