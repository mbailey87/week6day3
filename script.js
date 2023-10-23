$(document).ready(function() {
    $("#createComment").click(function() {
        let displayName = $("#displayName").val().trim();
        let commentText = $("#commentText").val().trim();

        if (displayName && commentText) {
            let commentItem = `
                <li>
                    <div class="comment-container">
                        <div class="display-name-container">
                            <!-- Added the default profile image -->
                            <img src="images/default-image-pic.png" alt="Profile Picture" class="profilePic">
                            <span class="display-name">${displayName}</span>
                            <div class="action-buttons">
                                <button class="edit">Edit</button>
                                <button class="delete">Delete</button>
                            </div>
                        </div>
                        <div class="comment-text-container">
                            <p>${commentText}</p>
                        </div>
                    </div>
                </li>
            `;

            $(".comments-list").prepend(commentItem);
            $("#displayName").val("");
            $("#commentText").val("");
        }
    });

    $(".comments-section").on("click", ".delete", function() {
        $(this).closest("li").remove();
    });

    let currentEditingCommentContainer = null;

    $(".comments-section").on("click", ".edit", function() {
        currentEditingCommentContainer = $(this).closest("li");
        let commentText = currentEditingCommentContainer.find(".comment-text-container p").text();
        
        $("#editCommentText").val(commentText);
        $(".edit-comment-modal").show();
    });

    $(".modal-close").click(function() {
        $(".edit-comment-modal").hide();
    });

    $("#submitEdit").click(function() {
        let updatedCommentText = $("#editCommentText").val();
        if (currentEditingCommentContainer && updatedCommentText.trim() !== "") {
            currentEditingCommentContainer.find(".comment-text-container p").text(updatedCommentText);
            $(".edit-comment-modal").hide();
        } else {
            alert("Comment cannot be empty!");
        }
    });
});
