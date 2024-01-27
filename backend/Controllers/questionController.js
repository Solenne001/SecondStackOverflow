const database = require('../config/mysql');

exports.getQuestions = (req, res) => {
    database.query('SELECT * FROM question', (err, results) => {
        if (err) {
            console.error('Error fetching questions:', err);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
};

exports.addQuestion = (req, res) => {
    const newQuestion = req.body.questionText;

    if (!newQuestion) {
        res.status(400).json({ success: false, message: 'Bad Request', error: 'Missing questionText in request body.' });
        return;
    }

    database.query('INSERT INTO question (content_question) VALUES (?)', [newQuestion], (err, results) => {
        if (err) {
            console.error('Error submitting question:', err);
            res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
            return;
        }

        console.log('Question submitted successfully. ID:', results.insertId);
        res.json({ success: true, message: 'Question submitted successfully.', insertedId: results.insertId });
    });
};
