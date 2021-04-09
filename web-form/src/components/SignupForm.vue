<template>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email</label>
    <input type="email" id="email" required v-model="email" />

    <label for="password">Password</label>
    <input type="password" id="password" required v-model="password" />
    <div class="error" v-if="passwordError">{{ passwordError }}</div>

    <label for="role">Role</label>
    <select id="role" v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label for="skills">Skills</label>
    <br />
    <small>Press <b>Alt + ,</b> to add a skill</small>
    <input type="text" id="skills" v-model="tempSkills" @keyup.alt="addSkill" />
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" id="terms" required v-model="terms" />
      <label for="terms">Accept Terms and Conditions</label>
    </div>

    <div class="submit">
      <button type="submit">Create an Account</button>
    </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms: {{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
      terms: false,
      tempSkills: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkills) {
        if (!this.skills.includes(this.tempSkills)) {
          this.skills.push(this.tempSkills);
        }
        this.tempSkills = "";
      }
    },
    deleteSkill(s) {
      this.skills = this.skills.filter((i) => {
        return i !== s;
      });
    },
    handleSubmit() {
      // form validation
      this.passwordError =
        this.password.length > 3
          ? ""
          : "Password must be at least 4 characters long.";
      if (!this.passwordError) {
        console.log(this.email);
        console.log(this.password);
        console.log(this.role);
        console.log(this.skills);
        console.log(this.terms);
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8rem;
  text-transform: uppercase;
  list-style: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 1px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 10px;
}
</style>