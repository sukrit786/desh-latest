const mongoose = require('mongoose');

let visitSchema = new mongoose.Schema({
    visit: String,
    careconditiontimespent: String,
    seedoc: String,
    noseedocreason: String,
    othernoseedocreason: String,
    psynoseedocreason: String,
    otherpsynoseedocreason: String,
    stable: String,
    gdrstable: String,
    psythreapy: String,
    reasonpsy: String,
    psyscreen: String,
    psyscreenreason: String,
    labs: String,
    labname: String,
    medmanage: String,
    reasonmedmanage: String,
    followup: String,
    patientcondition: String,
    unstable_text: String,
    started: String,
    increase: String,
    decrease: String,
    stopped: String,
    medstopdate: String,
    newappointmentrecord: String,
    added: String,
    addeddate: String,
    yesstable: String,
    nostable: String,
    verystable: String,
    yesstablepsy: String,
    nostablepsy: String,
    verystablepsy: String,
    psymanage: String,
    seepsy: String,
    noseepsyreason: String,
    theligible: String,
    pinsurance: String,
    sinsurance: String,
    facility: String,
    provider: String,
    room: String,
    medication: String,
    medicationName: String,
    generictest: String,
    pcp: String,
    genericresult: String,
    docterupload: String,
    demographicsheetuploaded: String,
    capacityassesment: String,
    capacity: String,
    bhi: String,
    ccm: String,
    bhiconcent: String,
    ccmconcent: String,
    medmanage2: String,
    scaleeligible: String,
    scale: String,
    comment: String,
    service_type: String,
    frequentlypsychotherapy: String,
    typevisit: String,
    medreason: String,
    othermedreason: String,
    geneticreason: String,
    othergeneticreason: String,
    medreason2: String,
    othermedreason2: String,
    psyreason: String,
    otherpsyreason: String,
    otherpsyscreenreason: String,
    bhireason: String,
    otherbhireason: String,
    ccmreason: String,
    otherccmreason: String,
    homeclinic: String,
    homeclinicconcent: String,
    homeclinicreason: String,
    otherhomeclinicreason: String,
    masterstable: String,
    masterstablereason: String,
    typevisitreason: String,
    thtime: String,
    consult: String,
    conpsy: String,
    conmed: String,
    conscr: String,
    conpsyreason: String,
    conmedreason: String,
    conscrreason: String,
    conpsyname: String,
    currentmeds: String,
    psy_symptoms: Array,
    meds_symptoms: Array,
    exmeds: Array,
    scaleinfo: Array,
    np: String,
    cch: String,
    cchconcent: String,
    cchdate: Date,
    cchreason: String,
    othercchreason: String,
    medfollowup:String,
    followupreason:String,
    followupdays:Date,
    scaleeligiblereason:String,
      otherscaleeligiblereason:String
})
mongoose.model('MVM', visitSchema);
let masterptSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    visits: [visitSchema]
});
mongoose.model('MasterPatient', masterptSchema);
