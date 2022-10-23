const form = document.getElementById("form");

form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();

  let el = form;
  let nameValue = el.name.value;
  let groupValue = el.group.value;
  let idValue = el.ID.value;
  let birthdayValue = el.birthday.value;
  let emailValue = el.email.value;
  let fail = true;

  let formReq = document.querySelectorAll("._req");
  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);
    formRemoveValid(input);

    if (pibTest(nameValue) || nameValue.length > 30) {
      fail = false;
      formAddError(document.getElementById("formName"));
    } else {
      formAddValid(document.getElementById("formName"));
    }
    if (groupTest(groupValue)) {
      fail = false;
      formAddError(document.getElementById("formGroup"));
    } else {
      formAddValid(document.getElementById("formGroup"));
    }
    if (idTest(idValue)) {
      fail = false;
      formAddError(document.getElementById("formID"));
    } else {
      formAddValid(document.getElementById("formID"));
    }
    if (birthdayTest(birthdayValue)) {
      fail = false;
      formAddError(document.getElementById("formBirthday"));
    } else {
      formAddValid(document.getElementById("formBirthday"));
    }
    if (emailTest(emailValue) || emailValue.length > 40) {
      fail = false;
      formAddError(document.getElementById("formEmail"));
    } else {
      formAddValid(document.getElementById("formEmail"));
    }
  }

  if (fail) {
    let loading = document.querySelector('.loading_img');
    loading.src = ""
    form.reset();
    document.getElementById("formName").classList.remove("_valid");
    document.getElementById("formGroup").classList.remove("_valid");
    document.getElementById("formID").classList.remove("_valid");
    document.getElementById("formBirthday").classList.remove("_valid");
    document.getElementById("formEmail").classList.remove("_valid");

    let title = document.querySelector(".information_title");
    title.classList.add("_title");

    let pib = document.querySelector(".pib_information");
    pib.classList.add("_pib");
    let pibSpan = document.querySelector(".pib_span");
    pibSpan.textContent = nameValue;

    let group = document.querySelector(".group_information");
    group.classList.add("_group");
    let groupSpan = document.querySelector(".group_span");
    groupSpan.textContent = groupValue;

    let id = document.querySelector(".id_information");
    id.classList.add("_id");
    let idSpan = document.querySelector(".id_span");
    idSpan.textContent = idValue;

    let birthday = document.querySelector(".birthday_information");
    birthday.classList.add("_birthday");
    let birthdaySpan = document.querySelector(".birthday_span");
    birthdaySpan.textContent = birthdayValue;

    let email = document.querySelector(".email_information");
    email.classList.add("_email");
    let emailSpan = document.querySelector(".email_span");
    emailSpan.textContent = emailValue;
  } else {
    let loading = document.querySelector('.loading_img');
    loading.src = "img/loading.png"
    let title = document.querySelector(".information_title");
    title.classList.remove("_title");
    let pib = document.querySelector(".pib_information");
    pib.classList.remove("_pib");
    let group = document.querySelector(".group_information");
    group.classList.remove("_group");
    let id = document.querySelector(".id_information");
    id.classList.remove("_id");
    let birthday = document.querySelector(".birthday_information");
    birthday.classList.remove("_birthday");
    let email = document.querySelector(".email_information");
    email.classList.remove("_email");
    return false;
  }
}

function pibTest(input) {
  return !/^[А-ЯІ][а-яі]*\s[А-ЯІ][.](\s)?[А-ЯІ][.]+$/.test(input);
}
function groupTest(input) {
  return !/^[А-ЯІ|A-Z][А-ЯІ|A-Z][-](\d{2})+$/.test(input);
}
function idTest(input) {
  return !/^[А-ЯІ|A-Z][А-ЯІ|A-Z]\s[№](\d{6})+$/.test(input);
}
function birthdayTest(input) {
  return !/^(\d{4})[-](\d{2})[-](\d{2})+$/.test(input);
}
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input);
}

function formAddError(input) {
  input.classList.add("_error");
}
function formAddValid(input) {
  input.classList.add("_valid");
}
function formRemoveError(input) {
  input.classList.remove("_error");
}
function formRemoveValid(input) {
  input.classList.remove("_valid");
}

const variant = document.querySelector(".myvariant");
variant.addEventListener("mouseover", (e) => {
  variant.style.backgroundColor = `#${parseInt(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;
});

variant.addEventListener("click", (e) => {
  let valueColor = document.querySelector(".input_color");
  variant.style.backgroundColor = valueColor.value;
  let columns = document.querySelectorAll(".dblclick");
  columns.forEach((element) => {
    element.style.backgroundColor = "#333";
  });
});

variant.addEventListener("dblclick", (e) => {
  let columns = document.querySelectorAll(".dblclick");
  let valueColor = document.querySelector(".input_color");
  columns.forEach((element) => {
    element.style.backgroundColor = valueColor.value;
  });
  variant.style.backgroundColor = "#333";
});
