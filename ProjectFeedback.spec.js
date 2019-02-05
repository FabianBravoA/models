const mongoose = require('mongoose');
const ProjectFeedbackSchema = require('./ProjectFeedback');


describe('ProjectFeedback', () => {
  it('should ...', (done) => {
    const ProjectFeedbackModel = mongoose.model('ProjectFeedback', ProjectFeedbackSchema);
    const projectFeedback = new ProjectFeedbackModel({
      "projectid": "cipher",
      "uid": "9x7YelqRH8hX3QRz0qV6IAhYlek1",
      "cohortid": "lim-2018-09-bc-js-am",
      "rubricVersion": "v2",
      "reviewerSurvey": "v1",
      "createdBy": "${UID}",
      "createdAt": "2019-02-05T20:54:40.810Z",
      "reviewerSurveyResults": {
        "perception": 2,
        "soft": "soft comment",
        "dropout": 3,
        "tech": "tech comment",
        "engagement": 1
      },
      "rubricResults": {
        "logic": 5,
        "architecture": 3,
        "communication": 4,
        "github": 5
      },
      "notes": "revisar esto:\n-\n-\n-"
    });
    projectFeedback.validate((err) => {
      console.log(err);
      // expect(err.name).toBe('ValidationError');
      // expect(err.errors).toMatchSnapshot();
      done();
    });
  });
});