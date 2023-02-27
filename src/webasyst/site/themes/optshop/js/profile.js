var renderProfilePage = function(options) {

    var storage = {
        hiddenClass: "is-hidden",
        changeLink: false,          // Dynamic var
        deletePhotoLink: false,     // Dynamic var
        getWrapper: function () {
            return $("#wa-my-info-wrapper");
        },
        getForm: function () {
            return $("#wa-my-info-edit-wrapper");
        },
        getInfoBlock: function () {
            return $("#wa-my-info-read-wrapper");
        },
        getPassword: function () {
            return this.getWrapper().find(".wa-field-password");
        },
        getPhoto: function () {
            return this.getWrapper().find(".wa-field-photo");
        }
    };

    var initialize = function () {
        var $password = storage.getPassword(),
            $photo = storage.getPhoto();

        if ($password.length) {
            renderChangePasswordLink();
        }

        if ($photo.length) {
            renderPhoto();
        }

        // initialize bindEvents after Render
        bindEvents();
    };

    var bindEvents = function () {

        // show Edit Form
        $("#wa-my-info-edit").on("click", function () {
            showEditForm();
            return false;
        });

        // hide edit Form
        $("#wa-my-info-cancel").on("click", function () {
            hideEditForm();
            return false;
        });

        var $change_link = storage.changeLink;
        if ($change_link.length) {
            $change_link.on("click", function () {
                onChangePasswordClick( $(this) );
                return false;
            });
        }

        var $delete_photo_link = storage.deletePhotoLink;
        if ($delete_photo_link.length) {
            $delete_photo_link.on("click", function () {
                onDeletePhotoClick($(this));
                return false;
            });
        }
    };

    var renderPhoto = function () {
        var $photo = storage.getPhoto(),
            $delete_photo_link = $("<a class=\"general-button\" href=\"javascript:void(0);\">" + options["deletePhotoText"] + "</a>"),
            $user_photo = $photo.find('img:first'),
            $default_photo = $photo.find('img:last');

        if ($user_photo[0] != $default_photo[0]) {
            //
            $default_photo.hide();

            //
            $default_photo.after($delete_photo_link);

            // Save to storage
            storage.deletePhotoLink = $delete_photo_link;

        } else {
            $default_photo.show();
        }
    };

    var renderChangePasswordLink = function () {
        var $change_link = $("<a class=\"general-button\" href=\"javascript:void(0);\">" + options["changePasswordText"] + "</a>"),
            $password = storage.getPassword();

        // Hide Password Fields
        $password.find("p").addClass(storage.hiddenClass);

        // Render
        $password.find('.wa-value').prepend($change_link);

        // Save to storage
        storage.changeLink = $change_link;
    };

    var showEditForm = function () {
        var $form = storage.getForm(),
            $info = storage.getInfoBlock();

        $form.removeClass(storage.hiddenClass);
        $info.addClass(storage.hiddenClass);
    };

    var hideEditForm = function () {
        var $form = storage.getForm(),
            $info = storage.getInfoBlock();

        $form.addClass(storage.hiddenClass);
        $info.removeClass(storage.hiddenClass);
    };

    var onDeletePhotoClick = function ($delete_photo_link) {
        var $photo = storage.getPhoto(),
            $photo_input = $photo.find('[name="profile[photo]"]'),
            $user_photo = $photo.find('img:first'),
            $default_photo = $photo.find('img:last');

        // Show default photo
        $default_photo.show();

        // Show user photo
        $user_photo.hide();

        // Hide delete link
        $delete_photo_link.hide();

        // Clear input value
        $photo_input.val('');
    };

    var onChangePasswordClick = function($change_link) {
        // hide link
        $change_link.hide();

        // Show fields
        storage.getPassword().find("p").removeClass(storage.hiddenClass);
    };

    $(document).ready(function () {
        initialize();
    });
};

renderProfilePage({
    "changePasswordText": "Сменить пароль",
    "deletePhotoText": "Удалить фото"
});