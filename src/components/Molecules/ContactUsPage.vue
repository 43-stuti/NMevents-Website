<template>
    <span>
        <v-container class="Cover" fluid fill-width fill-height>
            <v-container >
                <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="290">
                    <v-card>
                    <v-card-title class="headline">Hi {{name}}</v-card-title>
                    <v-card-text>Thanks for reaching out to us. We shall get back to you within 24 hours.</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="dialog = false">Ok</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
                </v-row>
                <v-row class = "mt-12 pt-12" align-center>
                    <v-col :cols= 12
                            :lg = 6
                            :md = 6
                            :sm = 12
                            :xl = 6>
                        <v-row class = "mt-12" align-center>
                            <v-col v-bind:class="[Classes.CoverText]"
                                    :cols= 12
                                    :lg = 12
                                    :md = 12
                                    :sm = 12
                                    :xl = 12
                            >
                                Contact Us
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col v-bind:class="[Classes.SubText]"
                                :cols= 10
                                :lg = 6
                                :md = 6
                                :sm = 10
                                :xl = 6
                            >
                                <v-row>
                                    <v-col
                                        :cols = 1
                                    >
                                        <v-icon color="black"> phone </v-icon>
                                    </v-col>
                                    <v-col class="ml-2"
                                        :cols = 8
                                    >
                                        9574065401
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        :cols = 1
                                    >
                                        <v-icon color="black"> mail </v-icon>
                                    </v-col>
                                    <v-col class="ml-2"
                                        :cols = 8
                                    >
                                        nm.creations@gmail.com
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col :cols= 12
                            :lg = 6
                            :md = 6
                            :sm = 12
                            :xl = 6>
                            <v-card>
                                <v-card-title v-bind:class="[Classes.SubText]">
                                   <div class="mt-12 mx-4 mt-12 text-h5 font-weight-bold text-left pink--text text--darken-1">
                                        Reach out to us
                                   </div>
                                   
                                </v-card-title>
                                <v-row class="mt-12 mx-8">
                                        <form>
                                        <p class="body-1 font-weight-medium"> Name </p>
                                        <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
                                                <v-text-field class="mt-n2 mb-12"
                                                    v-model="name"
                                                    :error-messages="errors"
                                                ></v-text-field>
                                            </ValidationProvider>

                                            <p class="body-1 font-weight-medium"> EmailID </p>
                                            <ValidationProvider v-slot="{ errors }" name="EmailID" rules="required|email">
                                                <v-text-field class="mt-n2 mb-12"
                                                    v-model="email"
                                                    :error-messages="errors"
                                                ></v-text-field>
                                            </ValidationProvider>

                                            <p class="body-1 font-weight-medium"> Contact Number </p>
                                            <ValidationProvider v-slot="{ errors }" name="Contact Number" rules="required|contactNumber">
                                                <v-text-field class="mt-n2 mb-12"
                                                    v-model="contactNumber"
                                                    :error-messages="errors"
                                                ></v-text-field>
                                            </ValidationProvider>

                                            <p class="body-1 font-weight-medium mb-6"> How would you like us to help you ? </p>
                                            <v-row>
                                                <v-col 
                                                    :cols = 7>
                                                    <v-checkbox v-model="weddings" label="Weddings"></v-checkbox>
                                                </v-col>
                                                <v-col 
                                                    :cols = 5>
                                                    <v-checkbox v-model="seminars" label="Seminars"></v-checkbox>
                                                </v-col>
                                                <v-col 
                                                    :cols = 7>
                                                    <v-checkbox v-model="concerts" label="Concerts"></v-checkbox>
                                                </v-col>
                                                <v-col 
                                                    :cols = 5>
                                                    <v-checkbox v-model="others" label="Others"></v-checkbox>
                                                </v-col>
                                                <div v-if= "others">
                                                    <ValidationProvider  v-slot="{ errors }" name="other" rules="required">
                                                        <v-text-field
                                                            class="ml-4"
                                                            v-model="othersDescription"
                                                            :error-messages="errors"
                                                            label="Others"
                                                        ></v-text-field>
                                                    </ValidationProvider>
                                                </div>
                                            </v-row>
                                        </form>
                                </v-row>
                                <v-row>
                                    <v-btn
                                        :disabled="!valid"
                                        color="success"
                                        class="ml-9 my-12"
                                        @click="sendMail()"
                                    >
                                        Submit
                                    </v-btn>
                                </v-row>
                            </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
        
    </span>
</template>
<script>
import  {ValidationProvider}  from 'vee-validate';
import { extend } from 'vee-validate';
import emailjs from 'emailjs-com';
extend('required', name => {
    return name.length > 0
})
extend('email', email => {
    return /.+@.+\..+/.test(email)
})
extend('contactNumber', contactNumber => {
    return (!isNaN(contactNumber) && contactNumber.length == 10)
})
export default {
    name:'ContactUsPage',
    components: {
        ValidationProvider
    },
    data() {
        return {
            name : '',
            contactNumber : '',
            email : '',
            details : '',
            others : false,
            weddings : false,
            seminars : false,
            concerts : false,
            dialog : false,
            othersDescription : '',
            Classes : {
                CoverText : 'text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h1 font-weight-black text-left',
                CoverTextLight : 'text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h1 font-weight-medium text-left',
                SubText : 'text-h5 font-weight-light mt-12 text-left grey--text text--darken-4',
                SectionHeading : 'grey--text text--darken-4',
                SectionSubHeading : 'text-h5 font-weight-bold mt-2',
                OverridingClass : 'text--white'
            }
        }
    },
    computed: {
        valid()  {
            return (this.name && (this.email || this.contactNumber));
        },
        purposes() {
            let purpose = '';
            if(this.weddings) {
                purpose = purpose + 'weddings';
            }
            if(this.seminars) {
                purpose = purpose + 'seminars';
            }
             if(this.concerts) {
                purpose = purpose + 'concerts';
            }
            return purpose;
        },
        templateParams() {
            return {
                name :this.name,
                email : this.email,
                details : this.details,
                contactNo : this.contactNumber,
                others: this.othersDescription,
                purpose: this.purposes
            }
        }
    },
    methods: {
        sendMail() {
            emailjs.send('stuti.mohgaonkar@gmail.com','NM_inquiry',this.templateParams,'user_za8tAvk7cJ7IRYWQYk8Rc') 
                .then((response) => {
                    this.dialog = true;
                    console.log('SUCCESS!',response);
                }, function(error) {
                    console.log('FAILURE',error)
            })
        }
    },
    watch: {
        dialog: function() {
            if(this.dialog == true) {
                this.name = '';
                this.contactNumber = '';
                this.email = '';
                this.details = '';
                this.othersDescription = '';
                this.others = false;
                this.weddings = false;
                this.seminars = false;
                this.concerts = false;
            }
        }
}
}
</script>
<style scoped>
.Cover { 
        background-color: rgba(255, 249, 253, 0.7);
    }
.Test {
        content: '';
        background :linear-gradient(to right, #CFD8DC 20%, #546E7A 100%);
        height: 7px;
        opacity : 0.9;
    }
</style>