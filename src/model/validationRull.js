export default {
  rules: {
    name: [
      v => (v || "").length >= 5 || "This field must be at least 50  chracters",
      v =>
        (v || " ").length <= 60 || "This field must be less than 60 chracters",
      v => /^[ a-zA-Z0-9 ]*$/.test(v) || "This field most be chracters"
    ],
    name_required: [
      v => !!v || "This field is required",
      v =>
        (v || " ").length >= 10 || "This field must be at least 10 chracters",
      v =>
        (v || " ").length <= 60 || "This field must be less than 60 chracters",
      v => /^[ a-zA-Z0-9 ]*$/.test(v) || "This field most be chracters"
    ],
    description: [
      v => /^[" "a-zA-Z]*$/.test(v) || "This field most be chracters or diget",
      v =>
        ((v || " ").length <= 100 && (v || " ").length <= 400) ||
        "This field most be less than 200 chracters"
    ],
    number: [v => /^[0-9]*$/.test(v) || "This field most be Number"],
    pdf_file: [
      v => !!v || "This is filed is required",
      value =>
        !value || value.size < 2097152 || "file size should be less than 2 MB!"
    ],
    list: [v => !!v || "Plase select one item"],
    password: [
      v => !!v || "Password is required",
      v =>
        ((v || "").length >= 8 && v.length <= 16) ||
        "Password must be minimuam 8 and maximuam 16",
      v =>
        /[A-Z]+/.test(v) ||
        "Password should conten at lest one capital character ",
      v =>
        /[£$%#@]+/.test(v) ||
        "Password should conten at least one spicial character",
      v => /[0-9]+/.test(v) || "Password should contenat least one diget"
    ],
    phone: [
      v => !!v || "Phone number is requred",
      v => /^[0-9]*$/.test(v) || "Phone most be digit",
      v => (v || "").length == 10 || "Phone most be 10 digit"
    ],
    email: [
      v => !!v || "E-mail is required",
      v => /[@.]+/.test(v) || ("" && v.length <= 35) || "E-mail most be valid"
    ],
    link_url: [
      v => /^[a-zA-Z.]*$/.test(v) || " link should be valid",
      v => (v || "").length <= 60 || "link must be less than 40 chracter"
    ]
  }
};
