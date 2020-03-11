<template>
  <q-page :class="whatIsBg">
    <qrcodereader
      @onInit="onInit"
      @onDecode="onDecode"
      :result.sync="result"
      style="width:0px"
      :error.sync="error"
    />

    <!-- test -->
    <transition enter-active-class="animated rotateIn" leave-active-class="animated zoomOut">
      <q-card v-if="showStudInfo" flat class="q-pa-lg row shadow-1 bg-transparent">
        <div class="full-width fixed-center row wrap justify-center items-center content-center">
          <div class="col-md-4 col-sm-12 row justify-center items-center content-center">
            <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md"
              :value="100"
              size="350px"
              :thickness="0.25"
              :color="getColor(studentInformationForm.course)"
              track-color="transparent"
            >
              <q-avatar size="320px">
                <q-img
                  :src="studentInformationForm.profileImgUrl"
                  spinner-color="indigo"
                  style="height: 320px; max-width: 320px"
                />
              </q-avatar>
            </q-circular-progress>
          </div>
          <div
            v-if="studentInformationForm.idnumber === '2019 - 0111'"
            class="col-md-auto col-sm-12"
          >
            <div class="text-h4 text-bold text-orange-8">Welcome TIM, FROM YOUR ADMIRER 😍😘</div>
            <div class="text-h2 text-weight-bolder text-capitalize text-white">
              {{
              studentInformationForm.firstname +
              " " +
              studentInformationForm.surname
              }}
            </div>
            <q-separator
              class="bg-blue-3"
              style="height:10px"
              spaced
              v-if="
                studentInformationForm.course === 'Secondary education' ||
                  studentInformationForm.course === 'Elementary education'
              "
            ></q-separator>
            <q-separator
              class="bg-purple-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Criminology'"
              spaced
            ></q-separator>
            <q-separator
              class="bg-yellow-3"
              style="height:10px"
              v-else-if="
                studentInformationForm.course === 'Business administration'
              "
              spaced
            ></q-separator>
            <q-separator
              class="bg-green-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Computer science'"
              spaced
            ></q-separator>
            <div class="text-h2 text-bold text-white">{{ studentInformationForm.idnumber }}</div>
            <q-btn
              class="text-h4 text-bold text-white bg-blue-10 q-mt-lg"
              size="20px"
              v-if="
                studentInformationForm.course === 'Secondary education' ||
                  studentInformationForm.course === 'Elementary education'
              "
            >{{ studentInformationForm.course }}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-purple-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Criminology'"
            >{{ studentInformationForm.course }}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-yellow-10 q-mt-lg"
              size="20px"
              v-else-if="
                studentInformationForm.course === 'Business administration'
              "
            >{{ studentInformationForm.course }}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-green-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Computer science'"
            >{{ studentInformationForm.course }}</q-btn>
          </div>

          <div
            v-else-if="studentInformationForm.idnumber === '2019 - 0320'"
            class="col-md-auto col-sm-12"
          >
            <div class="text-h4 text-bold text-orange-8">Welcome 🍆 💦</div>
            <div class="text-h2 text-weight-bolder text-capitalize text-blue-grey-10">
              {{
              studentInformationForm.firstname +
              " " +
              studentInformationForm.surname
              }}
            </div>
            <q-separator
              class="bg-blue-3"
              style="height:10px"
              spaced
              v-if="
                studentInformationForm.course === 'Secondary education' ||
                  studentInformationForm.course === 'Elementary education'
              "
            ></q-separator>
            <q-separator
              class="bg-purple-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Criminology'"
              spaced
            ></q-separator>
            <q-separator
              class="bg-yellow-3"
              style="height:10px"
              v-else-if="
                studentInformationForm.course === 'Business administration'
              "
              spaced
            ></q-separator>
            <q-separator
              class="bg-green-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Computer science'"
              spaced
            ></q-separator>
            <div class="text-h2 text-bold text-blue-grey-10">{{ studentInformationForm.idnumber }}</div>
            <q-btn
              class="text-h4 text-bold text-white bg-blue-10 q-mt-lg"
              size="20px"
              v-if="
                studentInformationForm.course === 'Secondary education' ||
                  studentInformationForm.course === 'Elementary education'
              "
            >{{ studentInformationForm.course }}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-purple-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Criminology'"
            >{{ studentInformationForm.course }}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-yellow-10 q-mt-lg"
              size="20px"
              v-else-if="
                studentInformationForm.course === 'Business administration'
              "
            >{{ studentInformationForm.course }}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-green-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Computer science'"
            >{{ studentInformationForm.course }}</q-btn>
          </div>

          <div v-else class="col-md-auto col-sm-12 text-grey-10">
            <div class="text-h4 text-bold text-white">
              Welcome to CKCM Library
              <img
                style="height:40px"
                src="https://loading.io/s/icon/e7vtp5.svg"
                alt
              />
            </div>
            <div class="text-h2 text-weight-bolder text-capitalize text-white">
              {{
              studentInformationForm.firstname +
              " " +
              studentInformationForm.surname
              }}
              <q-avatar size="100px" square>
                <img src="https://loading.io/s/icon/pn885j.svg" alt />
              </q-avatar>
            </div>
            <q-separator
              class="bg-blue-3"
              style="height:10px"
              spaced
              v-if="
                studentInformationForm.course === 'Secondary education' ||
                  studentInformationForm.course === 'Elementary education'
              "
            ></q-separator>
            <q-separator
              class="bg-purple-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Criminology'"
              spaced
            ></q-separator>
            <q-separator
              class="bg-yellow-3"
              style="height:10px"
              v-else-if="
                studentInformationForm.course === 'Business administration'
              "
              spaced
            ></q-separator>
            <q-separator
              class="bg-green-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Computer science'"
              spaced
            ></q-separator>
            <q-separator class="bg-deep-orange-3" style="height:10px" v-else spaced></q-separator>
            <div class="text-h2 text-bold text-white">{{ studentInformationForm.idnumber }}</div>
            <q-btn
              class="text-h4 text-bold text-white bg-blue-10 q-mt-lg"
              size="20px"
              v-if="
                studentInformationForm.course === 'Secondary education' ||
                  studentInformationForm.course === 'Elementary education'
              "
            >{{ studentInformationForm.course }}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-purple-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Criminology'"
            >{{ studentInformationForm.course }}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-yellow-10 q-mt-lg"
              size="20px"
              v-else-if="
                studentInformationForm.course === 'Business administration'
              "
            >{{ studentInformationForm.course }}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-green-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Computer science'"
            >{{ studentInformationForm.course }}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-deep-orange-10 q-mt-lg"
              size="20px"
              v-else
            >{{ studentInformationForm.course }}</q-btn>
          </div>
        </div>
      </q-card>
    </transition>
    <!-- test -->
    <q-separator v-if="showStudInfo" inset spaced></q-separator>

    <div v-if="!showStudInfo" class="fit row wrap justify-start items-start content-start">
      <div class="q-pa-md col-6">
        <div class="col">
          <q-card class="shadow-8">
            <q-badge color="red">Announcement !</q-badge>
            <q-card-section style="margin-top:-10px">
              <q-badge color="indigo" align="top">
                <span class="text-caption">March 1, 2020 to March 31, 2020</span>
              </q-badge>
              <q-toolbar class="bg-white shadow-5 rounded-borders">
                <q-toolbar-title class="text-body2 text-weight-bolder text-dark-orange">
                  <q-avatar>
                    <img
                      src="https://toppng.com/uploads/preview/28-collection-of-wonder-woman-clipart-images-wonder-women-cartoon-face-11563280260zadsvtcnz4.png"
                      alt
                    />
                  </q-avatar>
                  <!-- <q-avatar>
                    <img src="/statics/jieIcons/apple-touch-icon-180x180.png" alt />
                  </q-avatar>-->
                  <span class="q-ml-xs">
                    Women's Month: With the theme
                    <span
                      class="text-indigo"
                    >“WE Make Change Work for Women”</span>🤗🤗🤗🤗🤗🤗
                  </span>
                  <!-- <q-chip size="md" class="q-py-md" square color="black">
                    <span class="text-white">Month of </span> <q-chip square class="q-px-sm q-pa-none bg-amber-8 text-black">LOVE !</q-chip>
                  </q-chip>-->
                </q-toolbar-title>
              </q-toolbar>

              <q-input
                autofocus
                input-class=" text-transparent text-h3 text-bold text-center"
                v-model="testtester"
                @keyup="idnumbertypetest"
                mask="#### - ####"
                color="blue-1"
                style="width:40px;margin-top:-40px"
                class="text-weight-bold dense"
                ref="dummytester"
              />
              <div class="q-mt-md text-body2 text-weight-medium">
                <div
                  class="text-justify"
                >The celebration shall highlight the need to empower women as harbingers of change and enable them to participate in and benefit from development efforts.</div>
              </div>
            </q-card-section>

            <q-card-section style="margin-top:-10px">
              <q-toolbar class="bg-white shadow-5 rounded-borders">
                <q-toolbar-title class="text-subtitle1 text-weight-bolder text-dark-orange">
                  <q-avatar>
                    <img
                      src="data:image/png;base64,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"
                      alt
                    />
                  </q-avatar>
                  <span class="q-ml-xs">March is Fire Prevention Month 🔥🔥🔥🔥🔥🔥🔥🔥</span>
                </q-toolbar-title>
              </q-toolbar>
              <div class="q-mt-md text-body2 text-weight-medium">
                <div
                  class="text-justify"
                >The fire prevention month campaign, according to the measure, promotes “safety consciousness among our people every day of the year as a positive preventive approach to a problem that can be solved by more caution, vigilance, sobriety, exercise of common sense and respect for the law."</div>
              </div>
            </q-card-section>
          </q-card>
          <q-card bordered class="q-mt-md bg-blue-1 shadow-2">
            <q-card-section>
              <div class="row justify-center">
                <h4
                  style="margin-top: 16px"
                  class="text-blue-grey text-weight-medium"
                >WORD OF THE DAY</h4>
                <img
                  class="q-ml-md"
                  src="https://pic.sopili.net/pub/emoji/twitter/2/72x72/1f914.png"
                  width="48"
                  height="48"
                />
              </div>
              <div style="margin-top:-40px" class="row justify-center">
                <div class="col-8">
                  <q-separator></q-separator>
                </div>
                <div class="col-12 text-center" style="margin-top:-40px">
                  <h2 class="text-weight-bolder text-blue-grey-9">escapade</h2>
                  <h5 class="text-body1 text-blue-9" style="margin-top:-50px">
                    <span class="text-italic">noun</span> | ESS-kuh-payd
                  </h5>
                </div>
              </div>

              <div>
                <q-toolbar-title class="text-h5 text-blue-9 text-bold">Definition</q-toolbar-title>
                <div class="text-subtitle1 text-blue-grey-10">
                  <!-- 1:
                  <ol style="margin-top:-28px" type="a">
                    <li>: to form in the mind by new combinations or applications of ideas or principles : invent</li>
                    <li>: to plan to obtain or bring about : plot</li>
                  </ol>-->
                  : a usually adventurous action that runs counter to approved or conventional conduct
                </div>
                <q-toolbar-title class="q-pa-none text-h5 text-blue-9 text-bold">Example</q-toolbar-title>
                <p class="text-subtitle1 text-blue-grey-10">
                  There was a report that people with spotlights were turning picnic tables on their end and using them for snow
                  <span
                    class="text-blue text-italic"
                  >escapades</span>
                  on Pine Street and West Second Street in Cle Elum.
                  <!-- "Sir Keir Starmer, who has also announced his candidacy, said his aim was also to restore 'trust' in Labour. The manifesto, he conceded, was 'overloaded,' yet he did not <span class="text-italic text-primary">resile</span> from its ambitions." — <span class="text-primary text-italic text-bold"> The Telegraph (London), 6 Jan. 2020</span> -->
                </p>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <!-- src="statics/LIBRARYBG/Video/The Importance of a Library Why Books are Mightier Than Technology.mp4" -->
      <div v-if="bibleWeek" class="q-pr-md q-pt-md q-pb-md col-6">
        <!-- <div class="q-video" :ratio="16/9">
          <video class="fit" controls loop autoplay>
            <source
              src="statics/LIBRARYBG/Video/HAPPY INTERNATIONAL WOMEN'S DAY.mp4"
              type="video/mp4"
            />
          </video>
        </div>-->
        <q-card>
          <tablePenalties />
        </q-card>

        <q-card flat bordered class="q-mt-md bg-indigo-1">
          <q-toolbar>
            <q-toolbar-title class="text-weight-bolder text-indigo">TRIVIA</q-toolbar-title>
            <q-space></q-space>
            <q-avatar rounded color="indigo" text-color="white">
              {{
              timerStat
              }}
            </q-avatar>
          </q-toolbar>
          <q-card-section class="row wrap">
            <q-avatar size="90px" square class="q-mr-md shadow-20 bg-transparent">
              <img
                src="https://www.emoji.com/wp-content/uploads/filebase/icons/emoji-icon-glossy-00-00-faces-face-positive-face-with-bright-idea-but-ahndless-72dpi-forPersonalUseOnly.png"
                alt
              />
            </q-avatar>
            <div class="col">
              <span class="text-indigo text-h6">Question:</span>
              <br />
              <span
                class="text-indigo text-h5 text-weight-bold"
                v-html="triviaData.data.results[0].question"
              ></span>

              <ol
                type="A"
                v-if="triviaData.data.results[0].type === 'multiple'"
                class="text-body1 text-indigo"
              >
                <li :key="index" v-for="(ia, index) in sortAnswer">
                  <q-chip
                    v-if="
                      ia === triviaData.data.results[0].correct_answer &&
                        answerNow === true
                    "
                    class="text-white bg-light-green text-body1"
                    v-html="ia"
                  ></q-chip>
                  <span v-else v-html="ia"></span>
                </li>
              </ol>

              <div v-else class="text-h6 text-blue-grey-9 q-my-lg">
                <div v-if="!answerNow">
                  <q-chip outline class="text-white bg-grey" square>True</q-chip>
                  <!-- false -->
                  <q-chip outline class="text-white bg-grey" square>False</q-chip>
                </div>
                <div v-else>
                  <q-chip
                    outline
                    class="text-white bg-light-green"
                    v-if="triviaData.data.results[0].correct_answer"
                    square
                  >True</q-chip>
                  <q-chip outline v-else class="text-white bg-red" square>False</q-chip>
                </div>
              </div>

              <q-chip
                outline
                class="text-weight-bold bg-white text-subtitle2 text-blue-8"
              >Answer's reveal after {{ timerReveal }} seconds</q-chip>
            </div>
          </q-card-section>
        </q-card>

        <q-card v-if="!bibleWeek">
          <q-card-section>
            <q-toolbar-title class="text-orange-9 text-weight-bolder text-h5">VISION</q-toolbar-title>
            <p class="text-justify" style="font-size:16px">
              Christ the King College de Maranding library will envolve as a
              center of excellence in information storage and retrieval, sharing
              resources and expertise, playing an important role in the
              cultural, socio-economic, and political development of Lanao del
              Norte.
            </p>
          </q-card-section>

          <q-separator spaced></q-separator>

          <q-card-section>
            <q-toolbar-title class="text-orange-9 text-weight-bolder text-h5">MISSION</q-toolbar-title>
            <p class="text-justify" style="font-size:16px">
              Christ the King College de Maranding library aims to be the
              information base that will support the teaching, research
              extension and other goals of the school.
            </p>
          </q-card-section>
        </q-card>
        <!-- <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" /> -->
      </div>

      <div v-else class="q-pr-md q-pt-md q-pb-md col-6">
        <!-- <bibleCarousel>
          {{BibleData}}
        </bibleCarousel>-->
      </div>
    </div>

    <q-dialog v-model="dialogIdtyper">
      <q-card style="width:500px" class="q-pa-lg">
        <q-toolbar>
          <q-avatar square>
            <img src="https://img.icons8.com/ios-filled/50/000000/security-pass.png" />
          </q-avatar>

          <q-toolbar-title class="text-h6">
            Enter your
            <span class="text-weight-bold">ID NUMBER</span>
          </q-toolbar-title>
        </q-toolbar>

        <q-card-section>
          <q-input
            autofocus
            input-class="text-h3 text-bold text-center"
            standout="bg-primary text-white"
            v-model="test"
            mask="#### - ####"
            unmasked-value
            class="text-weight-bold"
            @input="idnumbertype($event)"
            @keyup.enter="enterIdnumber"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="dialogIdtyperPERSONNEL">
      <q-card style="width:500px" class="q-pa-lg">
        <q-toolbar>
          <q-avatar square>
            <img src="https://img.icons8.com/ios-filled/50/000000/security-pass.png" />
          </q-avatar>

          <q-toolbar-title class="text-h6">
            Enter your
            <span class="text-weight-bold">ID NUMBER</span>
          </q-toolbar-title>
        </q-toolbar>

        <q-card-section>
          <q-input
            autofocus
            input-class="text-h3 text-bold text-center"
            standout="bg-deep-orange text-white"
            v-model="test"
            mask="#### - ####"
            unmasked-value
            class="text-weight-bold"
            @input="idnumbertype($event)"
            @keyup.enter="enterIdnumberPERSONNEL"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- <img src="https://firebasestorage.googleapis.com/v0/b/einstein00-cf6cc.appspot.com/o/images%2F2ynRormG3d7cNXJKZoV3?alt=media&token=f48ac41b-c87d-48dd-9f25-9dd1226d2a56"> -->
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import find from "lodash/find";
import replace from "lodash/replace";
import { date } from "quasar";
import Vue from "vue";
import axios from "axios";

// import moment from 'moment'

export default {
  components: {
    tablePenalties: require("components/libraryCompo/tablePenalties.vue")
      .default,
    qrcodereader: require("components/qrcodeReader/qrcodereader1.vue").default
    // 'bibleCarousel': require('components/carousel/bibleCarousel.vue').default
    // 'libraryQrLoginCarousel': require('components/carousel/libraryQrcodelogin.vue').default
  },
  data() {
    return {
      wordInfo: [],
      triviaData: [],
      timerStat: null,
      timerReveal: null,
      answerNow: false,

      dialogIdtyper: false,
      dialogIdtyperPERSONNEL: false,
      slide: 1,
      test: "",
      testtester: "",
      showstream: true,
      now: {
        time: "",
        date: "",
        local: ""
      },
      result: "",
      error: "",
      value: 50,
      dialog1: true,
      showStudInfo: false,
      studentInformationForm: {
        firstname: "",
        middlename: "",
        surname: "",
        idnumber: "",
        keyIndex: "",
        course: "",
        profileImgUrl: "",
        fullname: "",
        position: ""
      },
      BibleData: [],
      bibleWeek: true
    };
  },
  computed: {
    ...mapGetters("admin", ["studentLists2", "personnelLists"]),
    whatIsBg() {
      if (this.showStudInfo) {
        return "valentinesPic";
      } else {
        return "bgpicHAYS";
      }
      // return 'bgpicHAYS'
    },
    sortAnswer() {
      var indata = this.triviaData.data.results[0].incorrect_answers;
      var data = this.triviaData.data.results[0].correct_answer;
      indata.push(data);

      // var sortedAnswer = sortBy(indata, indata)

      function shuffle(array) {
        var currentIndex = array.length,
          temporaryValue,
          randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      }
      var arr = shuffle(indata);
      return arr;
    }
  },
  methods: {
    ...mapActions("admin", [
      "addLibraryStat",
      "getPersonnelLists",
      "getStudentLists"
    ]),
    getWordApi() {
      // let vm = this
      // axios.get('https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=j7nn0y30zqfvdsgd4c5yzwenypk9bn888o3qhx1d1zhq48soz')
      //   .then(function (response) {
      //     axios.get('https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + response + '?key=e11a6fa0-e985-4ee3-b906-551502150d15')
      //       .then(response => (vm.wordInfo = response))
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
    },
    getColor(data) {
      console.log(data);
      var color = "";
      if (data === "Secondary education" || data === "Elementary education") {
        color = "blue-7";
      } else if (data === "Computer science") {
        color = "green-7";
      } else if (data === "Business administration") {
        color = "yellow-7";
      } else if (data === "Criminology") {
        color = "purple-7";
      } else {
        color = "deep-orange-7";
      }
      return color;
    },
    timerStart() {
      var data = 15;
      var timerAns = 10;
      let vm = this;
      setInterval(function() {
        data -= 1;
        vm.timerStat = data;
        if (data === 5) {
          vm.answerNow = true;
        }
        if (data === 0) {
          data = 15;
          vm.answerNow = false;
          vm.getTrivia();
          vm.getBibleVerses();
        }
      }, 1000);

      setInterval(function() {
        timerAns -= 1;
        vm.timerReveal = timerAns;
        if (vm.timerReveal === 0) {
          timerAns = 15;
        }
      }, 1000);
    },
    getTrivia() {
      // https://opentdb.com/api.php?amount=1&category=17
      axios
        .get("https://opentdb.com/api.php?amount=1&type=multiple")
        .then(response => (this.triviaData = response));
    },
    getBibleVerses() {
      let vm = this;
      // axios.get('http://quotes.rest/bible/verse.json')
      axios
        .get("https://beta.ourmanna.com/api/v1/get/?format=text&order=random")
        .then(function(response) {
          // console.log(response)
          vm.BibleData = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    enterIdnumberPERSONNEL() {
      let vm = this;
      this.onDecodePERSONNEL(this.testtester);
      this.testtester = null;
      // console.log(this.$refs.dummytester.focus)
      this.dialogIdtyperPERSONNEL = false;
      Vue.nextTick(() => {
        vm.$refs.dummytester.focus();
      });
    },
    enterIdnumber() {
      let vm = this;
      this.onDecode(this.testtester);
      this.testtester = null;
      // console.log(this.$refs.dummytester.focus)
      this.dialogIdtyper = false;
      Vue.nextTick(() => {
        vm.$refs.dummytester.focus();
      });
    },
    idnumbertype(event) {
      console.log(event);
      let vm = this;
      console.log(this.test);
      if (this.test === "") {
        this.testtester = null;
        console.log(this.$refs.dummytester.focus);
        this.dialogIdtyper = false;
        this.dialogIdtyperPERSONNEL = false;
        Vue.nextTick(() => {
          vm.$refs.dummytester.focus();
        });
        // this.$refs.dummytester.$el.focus()
      } else {
        this.testtester = this.test;
      }
    },
    idnumbertypetest() {
      // console.log(this.$refs)
      this.test = this.testtester;
      console.log(this.test);
      if (this.test !== "" && this.test !== "0") {
        this.dialogIdtyper = true;
        this.test = 201;
      } else if (this.test !== "" && this.test === "0") {
        this.dialogIdtyperPERSONNEL = true;
        this.test = 201;
      }
      // this.dialogIdtyperPERSONNEL = true
      // console.log(this.testtester, this.test)
    },
    showNotif(data) {
      var take0 = data[0];
      this.$q.notify({
        color: take0.color,
        textColor: "white",
        multiline: true,
        timeout: 5000,
        html: true,
        message: take0.message,
        avatar: "https://cdn.quasar.dev/img/boy-avatar.png"
      });
    },
    addStat(data) {
      let vm = this;
      let createdInfo = {
        idnumber: this.studentInformationForm.keyIndex,
        time: this.now
      };
      this.addLibraryStat(createdInfo).then(
        function(result) {
          var options = [];
          options.push({
            message: `Successfully Login, <br> <span class="text-capitalize">Have a nice day ${data.firstname}! </span> `,
            color: "light-green-8"
          });

          setTimeout(function() {
            vm.showStudInfo = false;
            vm.studentInformationForm = {
              firstname: "",
              middlename: "",
              surname: "",
              idnumber: "",
              keyIndex: "",
              course: "",
              profileImgUrl: ""
            };
          }, 6000);

          vm.showNotif(options);
        },
        function(error) {
          console.log(error);
        }
      );
    },
    addStatPERSONNEL(data) {
      let vm = this;
      var options = [];
      options.push({
        message: `Successfully Login, <br> <span class="text-capitalize">Have a nice day ${data.firstname}! </span> `,
        color: "light-green-8"
      });

      setTimeout(function() {
        vm.showStudInfo = false;
        vm.studentInformationForm = {
          firstname: "",
          middlename: "",
          surname: "",
          idnumber: "",
          keyIndex: "",
          course: "",
          profileImgUrl: ""
        };
      }, 10000);

      vm.showNotif(options);
    },
    DecodeSuccess(data) {
      this.showStudInfo = true;
      this.studentInformationForm = {
        firstname: data.firstname,
        middlename: data.middlename,
        surname: data.surname,
        idnumber: data.idnumber,
        keyIndex: data.keyIndex,
        course: data.course,
        profileImgUrl: data.profileImgUrl
      };

      this.addStat(data);
    },
    DecodeSuccessPERSONNEL(data) {
      this.showStudInfo = true;
      this.studentInformationForm = {
        firstname: data.firstname,
        middlename: data.middlename,
        surname: data.surname,
        idnumber: data.idnumber,
        keyIndex: data.keyIndex,
        course: data.department,
        position: data.position,
        profileImgUrl: data.profileImgUrl
      };
      this.addStatPERSONNEL(data);
    },
    DecodeError() {
      console.log("error");
      // var audioerror = new Audio('/statics/ringtone/suspense-message-2.mp3')
      // audioerror.play()
      this.$q.notify({
        message: ` Login Error, <br> <span class="text-bold">Id number not yet registered! </span> `,
        avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
        html: true,
        multiLine: true,
        timeout: 5000,
        position: "top",
        color: "red-10"
      });
    },
    onDecodePERSONNEL(result) {
      // result = 'PHOJIEMONEX - 2019 - 0310'
      this.showStudInfo = false;

      this.result = result;
      var idNUmber = replace(this.result, "CKCM - ", "");
      var indexData = find(this.personnelLists, ["idnumber", idNUmber]);
      // alert(idNUmber, indexData)
      if (indexData !== undefined) {
        // alert(idNUmber)
        // console.log(indexData)
        // var sound = '/statics/ringtone/notification.mp3'
        var audio = new Audio("/statics/ringtone/apple_pay.mp3");
        audio.play();
        this.DecodeSuccessPERSONNEL(indexData);
      } else {
        this.DecodeError();
      }
    },
    onDecode(result) {
      // result = 'PHOJIEMONEX - 2019 - 0310'
      this.showStudInfo = false;

      this.result = result;
      var idNUmber = replace(this.result, "PHOJIEMONEX - ", "");
      var indexData = find(this.studentLists2, ["idnumber", idNUmber]);
      // alert(idNUmber, indexData)
      if (indexData !== undefined) {
        // alert(idNUmber)
        // console.log(indexData)
        // var sound = '/statics/ringtone/notification.mp3'
        var audio = new Audio("/statics/ringtone/apple_pay.mp3");
        audio.play();
        this.DecodeSuccess(indexData);
      } else {
        this.DecodeError();
      }
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      } finally {
        // hide loading
      }
    }
  },
  created() {
    let vm = this;
    setInterval(function() {
      let timeStamp = new Date();
      let local = timeStamp.setHours(timeStamp.getHours() - 1);
      // .SSSZ
      let formattedTime = date.formatDate(local, "hh:mm:ssa");
      let formattedDate = date.formatDate(local, "MMMM Do YYYY");
      vm.now.time = formattedTime;
      vm.now.date = formattedDate;
      vm.now.local = local;
      // let date1 = new Date(1570222200202)
      // let date2 = date.formatDate(date1, 'hh:mm:ssa')
      // console.log(date2)
    }, 1000);
  },
  mounted() {
    this.$q.loading.show();
    this.getTrivia();
    this.timerStart();
    this.getBibleVerses();
    this.getWordApi();
    // let vm = this
    // this.getPersonnelLists().then(function (result) {
    //   vm.$q.loading.hide()
    // }, function (err) {
    //   console.log(err)
    // })
    // this.getStudentLists().then(function (result) {
    //   vm.$q.loading.hide()
    // }, function (err) {
    //   console.log(err)
    // })
  }
};
</script>

<style lang="stylus">
.bgPh {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://cdn-images-1.medium.com/max/800/1*hTwl4OGQJtoR3yOSYXCmmg.gif');
}

.bgpicHAYS {
  background-image: url('/statics/jieIcons/apple-touch-icon-72x72.png');
  // background-image: url('/statics/LIBRARYBG/a757df_7e6714194fe74dfbadf6914f84bc5e37_mv2.webp');
}

.valentinesPic {
  background-size: cover;
  // background-image: url('/statics/jieIcons/apple-touch-icon-180x180.png');
  // background-repeat: no-repeat;
  background-image: url('/statics/LIBRARYBG/a757df_5744a6fd6f574e258119e286b9729f9c_mv2.webp');
  // background-image: url('/statics/LIBRARYBG/a757df_7e6714194fe74dfbadf6914f84bc5e37_mv2.webp');
  // background-image: url('/statics/defaultimages/valentines3.png');
}

.schoolBG {
  background-repeat: no-repeat;
  // background-position: 600px 20px;
  background-image: url('https://www.onlygfx.com/wp-content/uploads/2018/10/4-heart-confetti-background-3.png');
  // background-image: url('/statics/svg/svgtria1.svg');
}
</style>
