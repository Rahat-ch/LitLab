window.onload=function() {
// var particlesJS = require('particle.js')

// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

//IMPORTANT FOR EDITOR TO WORK
var $doc = $('#doc');

var socket = io();

socket.on("connect", function() {
  console.log("Connected to Server");
});

socket.on("disconnect", function() {
  console.log("Disconnected from Server");
});

$doc.keyup(function(e){
    e.preventDefault();
    socket.emit('send doc', $doc.val());
  });

socket.on('update doc', function(data){
    $doc.val(data);
  });

socket.on("newMessage", function(message) {
  var out = document.getElementById("out");
  var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;
  console.log(out.scrollHeight + " - " + out.clientHeight + " - " + out.scrollTop)
  console.log("newMessage", message);
  var li = $("<li></li>");
  var userdisplayname = $.trim(message.from)
  li.html(`<span class="user-name">` + userdisplayname + `</span>: ${message.text}`);
  $("#messages").append(li)
  if(isScrolledToBottom) {
    out.scrollTop = out.scrollHeight - out.clientHeight;
    $(".chat-more").addClass("invisible");
  }
  $('.chat-input').val('');
});


$("#message-form").on("submit", function(e){
  e.preventDefault();
  if($("[name=message]").val().trim() !== ''){
var user = $(navbarDropdownMenuLink);
  socket.emit("createMessage", {
    from: user[1].outerText,
    text: $("[name=message]").val()
  }, function(){
  })
}
})

$(function() {
  $("#message-form").keypress(function (e) {
    if(e.which == 13 && $("[name=message]").val().trim() !== '') {
      //submit form via ajax, this is not JS but server side scripting so not showing here
      var user = $(navbarDropdownMenuLink);
      socket.emit("createMessage", {
        from: user[1].outerText,
        text: $("[name=message]").val()
      }, function(){
          })
          e.preventDefault();
      }
  });
});

if(document.getElementById("out")) {
  document.getElementById("out").addEventListener("wheel", function() {
    var out = document.getElementById("out");
    var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;
    if (out.scrollHeight > out.clientHeight) {
      $(".chat-more").removeClass("invisible");
    }
    if(isScrolledToBottom) {
      out.scrollTop = out.scrollHeight - out.clientHeight;
      $(".chat-more").addClass("invisible");
    }
  })
}



// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

if(document.getElementById("particles-js")) {
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}

}
