function searchToggle(a,e){var s=$(a).closest(".search-wrapper");s.hasClass("active")?s.hasClass("active")&&0===$(a).closest(".input-holder").length&&(s.removeClass("active"),s.find(".search-input").val("")):(s.addClass("active"),e.preventDefault())}