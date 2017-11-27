$("#submit").on("click", function (event) {
    event.preventDefault();

    var validForm = validateForm();

    // Initializes friend score for each friend
    let scoreArr = [];

    const numQuestions = 10;

    // Current url
    let currURL = window.location.origin;

    if (validForm) {
        // Push scores to scoreArr
        for (var i = 1; i <= numQuestions; i++) {
            var scoresVal = parseInt($('#question' + i).val());
            scoreArr.push(scoresVal);
        }

        // new Friend object 
        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#imgLink").val().trim(),
            scores: scoreArr
        }

        $.post(currURL + '/api/friends', newFriend, function (data) {
            $('.modal-name').text(data.name);
            $('.modal-img').attr('src', data.photo);
            $('.modal-user').text(newFriend.name);

            // Clear values
            for (var k = 1; k <= numQuestions; k++) {
                $('#question' + k).val("");
            }
            $('#name').val("");
            $("#imgLink").val("");
        });

        $("#resultsModal").modal('toggle');
    } else {
        alert('Blank fields and unanswered questions are not acceptable. Please enter all blank fields and answer all questions. Thanks!');
    }
});

function validateForm() {
    var isValid = true;

    if ($('#name').val() == '' || $('#imgLink').val() == '') {
        isValid = false;
        return isValid;
    }

    $('.questions').each(function () {
        if ($(this).val() == '' || $(this).val() == 'undefined') {
            isValid = false;
            return isValid;
        }
    });

    return isValid;
}