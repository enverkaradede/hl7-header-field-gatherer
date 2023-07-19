const segmentInfoArr = [
    {
        "id": "ABS",
        "type": "Segment",
        "label": "ABS - Abstract",
        "description": "This segment was created to communicate patient abstract information used for billing and reimbursement purposes. Abstract is a condensed form of medical history created for analysis, care planning, etc."
    },
    {
        "id": "ACC",
        "type": "Segment",
        "label": "ACC - Accident",
        "description": "The ACC segment contains patient information relative to an accident in which the patient has been involved."
    },
    {
        "id": "ADD",
        "type": "Segment",
        "label": "ADD - Addendum",
        "description": "The ADD segment is used to define the continuation of the prior segment in a continuation message."
    },
    {
        "id": "AFF",
        "type": "Segment",
        "label": "AFF - Professional Affiliation",
        "description": "The AFF segment adds detailed information regarding professional affiliations with which the staff member identified by the STF segment is/was associated."
    },
    {
        "id": "AIG",
        "type": "Segment",
        "label": "AIG - Appointment Information - General Resource",
        "description": "The AIG segment contains information about various kinds of resources (other than those with specifically defined segments in this chapter) that can be scheduled. Resources included in a transaction using this segment are assumed to be controlled by a schedule on a schedule filler application. Resources not controlled by a schedule are not identified on a schedule request using this segment. Resources described by this segment are general kinds of resources, such as equipment, that are identified with a simple identification code."
    },
    {
        "id": "AIL",
        "type": "Segment",
        "label": "AIL - Appointment Information - Location Resource",
        "description": "The AIL segment contains information about location resources (meeting rooms, operating rooms, examination rooms, or other locations) that can be scheduled. Resources included in a transaction using this segment are assumed to be controlled by a schedule on a schedule filler application. Resources not controlled by a schedule are not identified on a schedule request using this segment. Location resources are identified with this specific segment because of the specific encoding of locations used by the HL7 specification."
    },
    {
        "id": "AIP",
        "type": "Segment",
        "label": "AIP - Appointment Information - Personnel Resource",
        "description": "The AIP segment contains information about the personnel types that can be scheduled. Personnel included in a transaction using this segment are assumed to be controlled by a schedule on a schedule filler application. Personnel not controlled by a schedule are not identified on a schedule request using this segment. The kinds of personnel described on this segment include any healthcare provider in the institution controlled by a schedule (for example: technicians, physicians, nurses, surgeons, anesthesiologists, or CRNAs)."
    },
    {
        "id": "AIS",
        "type": "Segment",
        "label": "AIS - Appointment Information",
        "description": "The AIS segment contains information about various kinds of services that can be scheduled. Services included in a transaction using this segment are assumed to be controlled by a schedule on a schedule filler application. Services not controlled by a schedule are not identified on a schedule request using this segment."
    },
    {
        "id": "AL1",
        "type": "Segment",
        "label": "AL1 - Patient Allergy Information",
        "description": "The AL1 segment contains patient allergy information of various types. Most of this information will be derived from user-defined tables. Each AL1 segment describes a single patient allergy."
    },
    {
        "id": "APR",
        "type": "Segment",
        "label": "APR - Appointment Preferences",
        "description": "The APR segment contains parameters and preference specifications used for requesting appointments in the SRM message. It allows placer applications to provide coded parameters and preference indicators to the filler application, to help determine when a requested appointment should be scheduled. An APR segment can be provided in conjunction with either the ARQ segment or any of the service and resource segments (AIG, AIS, AIP, and AIL). If an APR segment appears in conjunction with an ARQ segment, its parameters and preference indicators pertain to the schedule request as a whole. If the APR segment appears with any of the service and resource segments, then its parameters and preferences apply only to the immediately preceding service or resource."
    },
    {
        "id": "ARQ",
        "type": "Segment",
        "label": "ARQ - Appointment Request",
        "description": "The ARQ segment defines a request for the booking of an appointment. It is used in transactions sent from an application acting in the role of a placer."
    },
    {
        "id": "AUT",
        "type": "Segment",
        "label": "AUT - Authorization Information",
        "description": "This segment represents an authorization or a pre-authorization for a referred procedure or requested service by the payor covering the patients health care."
    },
    {
        "id": "BHS",
        "type": "Segment",
        "label": "BHS - Batch Header Segment",
        "description": "The BHS segment defines the start of a batch."
    },
    {
        "id": "BLC",
        "type": "Segment",
        "label": "BLC - Blood Code",
        "description": "The BLC segment contains data necessary to communicate patient abstract blood information used for billing and reimbursement purposes. This segment is repeating to report blood product codes and the associated blood units."
    },
    {
        "id": "BLG",
        "type": "Segment",
        "label": "BLG - Billing",
        "description": "The BLG segment is used to provide billing information, on the ordered service, to the filling application."
    },
    {
        "id": "BPO",
        "type": "Segment",
        "label": "BPO - Blood product order",
        "description": "Blood product order messages require additional information that is not available in other standard HL7 order messages.  Blood product order messages need to contain accompanying details regarding the blood product component, such as special processing requirements (e.g. irradiation and leukoreduction) and the amount of the blood product to be administered. "
    },
    {
        "id": "BPX",
        "type": "Segment",
        "label": "BPX - Blood product dispense status",
        "description": "In the processing of blood products, it is necessary for the transfusion service and the placer system to communicate information. The status messages need to contain additional information regarding the blood products requested, such as the unique donation ID, product code, blood type, expiration date/time of the blood product, and current status of the product. This segment is similar to an OBX segment, but contains additional attributes."
    },
    {
        "id": "BTS",
        "type": "Segment",
        "label": "BTS - Batch Trailer Segment",
        "description": "The BTS segment defines the end of a batch."
    },
    {
        "id": "BTX",
        "type": "Segment",
        "label": "BTX - Blood Product Transfusion/Disposition",
        "description": ""
    },
    {
        "id": "CDM",
        "type": "Segment",
        "label": "CDM - Charge Description Master",
        "description": "The CDM segment contains the fields for identifying anything which is charged to patient accounts, including procedures, services, supplies.  It is intended to be used to maintain a list of valid chargeable utilization items.  Its purpose is to keep billing codes synchronized between HIS, Patient Accounting, and other departmental systems.  It is not intended to completely support materials management, inventory, or complex pricing structures for which additional complex fields would be required.  Given an identifying charge code, the associated fields in the charge description master file will provide basic pricing and billing data.  All the additional information necessary for patient accounting systems to do billing and claims is not intended to be included in this segment; those should be part of insurance or billing profile tables.\r\n\r\nThe CDM segment contains the fields which, for one chargeable item, remain the same across facilities, departments, and patient types.  The following PRC segment contains the fields which, for the same chargeable item, vary depending upon facility or department or patient type. "
    },
    {
        "id": "CER",
        "type": "Segment",
        "label": "CER - Certificate Detail",
        "description": "The CER segment adds detailed information regarding the formal authorizations to provide a service (e.g. licenses, certificates) held by the health professional identified by the STF segment."
    },
    {
        "id": "CM0",
        "type": "Segment",
        "label": "CM0 - Clinical Study Master",
        "description": "The Clinical Study Master (CM0) segment contains the information about the study itself.  The sending application study number for each patient is sent in the CSR segment.  The optional CM0 enables information about the study at the sending application that may be useful to the receiving systems.  All of the fields in the segment describe the study status at the sending facility unless otherwise agreed upon. "
    },
    {
        "id": "CM1",
        "type": "Segment",
        "label": "CM1 - Clinical Study Phase Master",
        "description": "Each Clinical Study Phase Master (CM1) segment contains the information about one phase of a study identified in the preceding CM0.  This is an optional structure to be used if the study has more than one treatment or evaluation phase within it.  The identification of study phases that the patient enters are sent in the CSP segment: sequence 2.  The CM1 segment describes the phase in general for the receiving system."
    },
    {
        "id": "CM2",
        "type": "Segment",
        "label": "CM2 - Clinical Study Schedule Master",
        "description": "The Clinical Study Schedule Master (CM2) contains the information about the scheduled time points for study or phase-related treatment or evaluation events.  The fact that a patient has data satisfying a scheduled time point is sent in the CSS segment, sequence 2.  The CM2 segment describes the scheduled time points in general. "
    },
    {
        "id": "CNS",
        "type": "Segment",
        "label": "CNS - Clear Notification",
        "description": "The clear equipment notification segment contains the data necessary to allow the receiving equipment to clear any associated notifications."
    },
    {
        "id": "CON",
        "type": "Segment",
        "label": "CON - Consent",
        "description": "The consent segment provides details about a specific consent by a patient or staff member"
    },
    {
        "id": "CSP",
        "type": "Segment",
        "label": "CSP - Clinical Study Phase",
        "description": "The CSP segment contains information on a patients status for a particular phase of the study. This segment is optional and is useful when a study has different evaluation intervals within it. (See Section 0, HL7 Attribute Table - CSR - Clinical Study RegistrationPhase of a Clinical Trial. The CSP segment is implemented on a study-specific basis for messaging purposes. The fact that the patient has entered a phase of the study that represents a certain treatment approach may need to be messaged to other systems, like pharmacy, nursing, or order entry. It is also important to sponsors and data management centers for tracking patient progress through the study and monitoring the data schedule defined for each phase. It may subsume OBR and OBX segments that follow it to indicate that these data describe the phase."
    },
    {
        "id": "CSR",
        "type": "Segment",
        "label": "CSR - Clinical Study Registration",
        "description": "The CSR segment will contain fundamental administrative and regulatory information required to document a patients enrollment on a clinical trial. This segment is all that is required if one needs to message another system that an enrollment has taken place, i.e., from clinical trials to pharmacy, accounting, or order entry systems. The CSR segment may also be used to identify that OBR, OBX, RXA, and RXR segments that follow represent data applicable to the identified study."
    },
    {
        "id": "CSS",
        "type": "Segment",
        "label": "CSS - Clinical Study Data Schedule Segment",
        "description": "The Clinical Study Data Schedule (CSS) segment is optional depending on whether messaging of study data needs to be linked to the scheduled data time points for the study. (See Section 7.6.1.3, data schedule.) The CSS segment enables communication of data schedules and adherence that ranges from the basic to the elaborate. Use of the segment must be planned for each implementation. Each CSS segment will subsume observation and drug administration segments that follow, indicating that they satisfy this scheduled time point."
    },
    {
        "id": "CTD",
        "type": "Segment",
        "label": "CTD - Contact Data",
        "description": "The CTD segment may identify any contact personnel associated with a patient referral message and its related transactions. The CTD segment will be paired with a PRD segment. The PRD segment contains data specifically focused on provider information in a referral. While it is important in an inter-enterprise transaction to transmit specific information regarding the providers involved (referring and referred-to), it may also be important to identify the contact personnel associated with the given provider. For example, a provider receiving a referral may need to know the office manager or the billing person at the institution of the provider who sent the referral. This segment allows for multiple contact personnel to be associated with a single provider."
    },
    {
        "id": "CTI",
        "type": "Segment",
        "label": "CTI - Clinical Trial Identification",
        "description": "The CTI segment is an optional segment that contains information to identify the clinical trial, phase and time point with which an order or result is associated."
    },
    {
        "id": "DB1",
        "type": "Segment",
        "label": "DB1 - Disability",
        "description": "The disability segment contains information related to the disability of a person. This segment was created instead of adding disability attributes to each segment that contains a person (to which disability may apply). This is an optional segment that can be used to send disability information about a person already defined by the Patient Administration Chapter. The disabled person code and identifier allow for the association of the disability information to the person."
    },
    {
        "id": "DG1",
        "type": "Segment",
        "label": "DG1 - Diagnosis",
        "description": "The DG1 segment contains patient diagnosis information of various types, for example, admitting, primary, etc. The DG1 segment is used to send multiple diagnoses (for example, for medical records encoding). It is also used when the FT1-19 - Diagnosis Code - FT1 does not provide sufficient information for a billing system. This diagnosis coding should be distinguished from the clinical problem segment used by caregivers to manage the patient (see Chapter 12, Patient Care). Coding methodologies are also defined."
    },
    {
        "id": "DRG",
        "type": "Segment",
        "label": "DRG - Diagnosis Related Group",
        "description": "The DRG segment contains diagnoses-related grouping information of various types. The DRG segment is used to send the DRG information, for example, for billing and medical records encoding."
    },
    {
        "id": "DSC",
        "type": "Segment",
        "label": "DSC - Continuation Pointer",
        "description": "The DSC segment is used in the continuation protocol."
    },
    {
        "id": "DSP",
        "type": "Segment",
        "label": "DSP - Display Data",
        "description": "The DSP segment is used to contain data that has been preformatted by the sender for display. The semantic content of the data is lost; the data is simply treated as lines of text."
    },
    {
        "id": "ECD",
        "type": "Segment",
        "label": "ECD - Equipment Command",
        "description": "The equipment command segment contains the information required to notify the receiving component what is to happen."
    },
    {
        "id": "ECR",
        "type": "Segment",
        "label": "ECR - Equipment Command Response",
        "description": "The equipment command response segment contains the receiving component's response to the previously received command."
    },
    {
        "id": "EDU",
        "type": "Segment",
        "label": "EDU - Educational Detail",
        "description": "The EDU segment adds detailed educational information to the staff member identified by the STF segment. An EDU segment may optionally follow an STF segment. An EDU segment must always have been preceded by a corresponding STF segment."
    },
    {
        "id": "EQL",
        "type": "Segment",
        "label": "EQL - Embedded Query Language",
        "description": "The EQL segment is used to define queries using select statements based on the query language of choice (e.g., SQL).  Refer to the functional chapters for the lists of HL7-defined EQL select statements. \r\n\r\nThis segment is not carried forward to the recommended queries for v 2.4."
    },
    {
        "id": "EQP",
        "type": "Segment",
        "label": "EQP - Equipment/log Service",
        "description": "The equipment log/service segment is the data necessary to maintain an adequate audit trail of events that have occurred on a particular piece of equipment."
    },
    {
        "id": "EQU",
        "type": "Segment",
        "label": "EQU - Equipment Detail",
        "description": "The equipment detail segment contains the data necessary to identify and maintain the equipment that is being used throughout the Laboratory Automation System."
    },
    {
        "id": "ERQ",
        "type": "Segment",
        "label": "ERQ - Event replay query",
        "description": "This segment is not carried forward to the recommended queries for v 2.4."
    },
    {
        "id": "ERR",
        "type": "Segment",
        "label": "ERR - Error",
        "description": "The ERR segment is used to add error comments to acknowledgment messages."
    },
    {
        "id": "EVN",
        "type": "Segment",
        "label": "EVN - Event Type",
        "description": "The EVN segment is used to communicate necessary trigger event information to receiving applications. Valid event types for all chapters are contained in HL7 Table 0003 - Event Type ."
    },
    {
        "id": "FAC",
        "type": "Segment",
        "label": "FAC - Facility",
        "description": ""
    },
    {
        "id": "FHS",
        "type": "Segment",
        "label": "FHS - File Header Segment",
        "description": "The FHS segment is used to head a file (group of batches)."
    },
    {
        "id": "FT1",
        "type": "Segment",
        "label": "FT1 - Financial Transaction",
        "description": "The FT1 segment contains the detail data necessary to post charges, payments, adjustments, etc. to patient accounting records."
    },
    {
        "id": "FTS",
        "type": "Segment",
        "label": "FTS - File Trailer Segment",
        "description": "The FTS segment defines the end of a file. "
    },
    {
        "id": "GOL",
        "type": "Segment",
        "label": "GOL - Goal Detail",
        "description": "The goal detail segment contains the data necessary to add, update, correct, and delete the goals for an individual."
    },
    {
        "id": "GP1",
        "type": "Segment",
        "label": "GP1 - Grouping/Reimbursement - Visit",
        "description": "These fields are used in grouping and reimbursement for CMS APCs. Please refer to the \"Outpatient Prospective Payment System Final Rule\" (\"OPPS Final Rule\") issued by CMS."
    },
    {
        "id": "GP2",
        "type": "Segment",
        "label": "GP2 - Grouping/Reimbursement - Procedure Line Item",
        "description": "This segment is used for items that pertain to each HCPC/CPT line item."
    },
    {
        "id": "GT1",
        "type": "Segment",
        "label": "GT1 - Guarantor",
        "description": "The GT1 segment contains guarantor (e.g., the person or the organization with financial responsibility for payment of a patient account) data for patient and insurance billing applications."
    },
    {
        "id": "IAM",
        "type": "Segment",
        "label": "IAM - Patient Adverse Reaction Information",
        "description": "The IAM segment contains person/patient adverse reaction information of various types. Most of this information will be derived from user-defined tables. Each IAM segment describes a single person/patient adverse reaction. This segment is used in lieu of the AL1 - Patient Allergy Information Segment to support action code/unique identifier mode update definition of repeating segments. The AL1 segment is used to support Snapshot mode update definition."
    },
    {
        "id": "IIM",
        "type": "Segment",
        "label": "IIM - Inventory Item Master",
        "description": "The Inventory Item Master segment (IIM) contains information about the stock of product that can be used to fulfill an ordered test/service. All of the fields in this segment describe the test/service and other basic attributes pertaining to Service Item defined within an Other Observation/Service Item master file. This segment is related to centrally stocked or supply management concerns.\r\n\r\nNote:  We recognize that the M15 Inventory Item Master File trigger event and the IIM inventory item master segment is a limited implementation.  There is a comprehensive Materials Management message in development for inclusion in the next release.  For further information contact the Scheduling and Logistics TC.  This will be coordinated with the Control/Query TC and the Orders and Observations TC. "
    },
    {
        "id": "IN1",
        "type": "Segment",
        "label": "IN1 - Insurance",
        "description": "The IN1 segment contains insurance policy coverage information necessary to produce properly pro-rated and patient and insurance bills."
    },
    {
        "id": "IN2",
        "type": "Segment",
        "label": "IN2 - Insurance Additional Information",
        "description": "The IN2 segment contains additional insurance policy coverage and benefit information necessary for proper billing and reimbursement. Fields used by this segment are defined by CMS or other regulatory agencies."
    },
    {
        "id": "IN3",
        "type": "Segment",
        "label": "IN3 - Insurance Additional Information, Certification",
        "description": "The IN3 segment contains additional insurance information for certifying the need for patient care. Fields used by this segment are defined by CMS, or other regulatory agencies."
    },
    {
        "id": "INV",
        "type": "Segment",
        "label": "INV - Inventory Detail",
        "description": "The inventory detail segment is the data necessary to track the inventory of substances (e.g. reagent, tips, waste) on equipment."
    },
    {
        "id": "IPC",
        "type": "Segment",
        "label": "IPC - Imaging Procedure Control Segment",
        "description": "The IPC segment contains information about tasks that need to be performed in order to fulfill the request for imaging service. The information includes location, type and instance identification of equipment (acquisition modality) and stages (procedure steps)."
    },
    {
        "id": "ISD",
        "type": "Segment",
        "label": "ISD - Interaction Status Detail",
        "description": "The interaction detail segment contains information about the status of specific interaction (e.g., processing) on the specific equipment."
    },
    {
        "id": "LAN",
        "type": "Segment",
        "label": "LAN - Language Detail",
        "description": "The LAN segment adds detailed language information to the staff member identified by the STF segment. An LAN segment may optionally follow an STF segment. An LAN segment must always have been preceded by a corresponding STF segment."
    },
    {
        "id": "LCC",
        "type": "Segment",
        "label": "LCC - Location Charge Code",
        "description": "The optional LCC segment identifies how a patient location room can be billed by a certain department.  A department can use different charge codes for the same room or bed, so there can be multiple LCC segments following an LDP segment."
    },
    {
        "id": "LCH",
        "type": "Segment",
        "label": "LCH - Location Characteristic",
        "description": "The LCH segment is used to identify location characteristics which determine which patients will be assigned to the room or bed.  It contains the location characteristics of the room or bed identified in the preceding LOC segment. There should be one LCH segment for each attribute. \r\n\r\nWhen the LCH segment appears immediately following the LOC segment, it communicates characteristics which are the same across multiple departments that may use the same room.  When the LCH segment appears immediately following the LDP segment, it communicates characteristics which differ for different departments that may use the same room.  For example, the following characteristics are more likely to vary by which department is using the room: teaching, gender, staffed, set up, overflow, whereas the other characteristics are likely to remain the same."
    },
    {
        "id": "LDP",
        "type": "Segment",
        "label": "LDP - Location Department",
        "description": "The LDP segment identifies how a patient location room is being used by a certain department.  Multiple departments can use the same patient location, so there can be multiple LDP segments following an LOC segment.  There must be at least one LDP segment for each LOC segment.  This is not intended to include any current occupant information. "
    },
    {
        "id": "LOC",
        "type": "Segment",
        "label": "LOC - Location Identification",
        "description": "The LOC segment can identify any patient location referenced by information systems.  This segment gives physical set up information about the location.  This is not intended to include any current occupant or current use information.  There should be one LOC segment for each patient location.  If desired, there can also be one LOC segment for each nursing unit and room."
    },
    {
        "id": "LRL",
        "type": "Segment",
        "label": "LRL - Location Relationship",
        "description": "The LRL segment is used to identify one location\u2019s relationship to another location, the nearest lab, pharmacy, etc."
    },
    {
        "id": "MFA",
        "type": "Segment",
        "label": "MFA - Master File Acknowledgment",
        "description": "The Technical Steward for the MFA segment is CQ."
    },
    {
        "id": "MFE",
        "type": "Segment",
        "label": "MFE - Master File Entry",
        "description": "The Technical Steward for the MFE segment is CQ."
    },
    {
        "id": "MFI",
        "type": "Segment",
        "label": "MFI - Master File Identification",
        "description": "The Technical Steward for the MFI segment is CQ."
    },
    {
        "id": "MRG",
        "type": "Segment",
        "label": "MRG - Merge Patient Information",
        "description": "The MRG segment provides receiving applications with information necessary to initiate the merging of patient data as well as groups of records. It is intended that this segment be used throughout the Standard to allow the merging of registration, accounting, and clinical records within specific applications."
    },
    {
        "id": "MSA",
        "type": "Segment",
        "label": "MSA - Message Acknowledgment",
        "description": "The MSA segment contains information sent while acknowledging another message."
    },
    {
        "id": "MSH",
        "type": "Segment",
        "label": "MSH - Message Header",
        "description": "The MSH segment defines the intent, source, destination, and some specifics of the syntax of a message."
    },
    {
        "id": "NCK",
        "type": "Segment",
        "label": "NCK - System Clock",
        "description": "The NCK segment is used to allow the various applications on the network to synchronize their system clocks (system date and time)."
    },
    {
        "id": "NDS",
        "type": "Segment",
        "label": "NDS - Notification Detail",
        "description": "The equipment notification detail segment is the data necessary to maintain an adequate audit trail as well as notifications of events, (e.g., alarms that have occurred on a particular piece of equipment."
    },
    {
        "id": "NK1",
        "type": "Segment",
        "label": "NK1 - Next of Kin / Associated Parties",
        "description": "The NK1 segment contains information about the patients other related parties. Any associated parties may be identified. Utilizing NK1-1 - set ID, multiple NK1 segments can be sent to patient accounts."
    },
    {
        "id": "NPU",
        "type": "Segment",
        "label": "NPU - Bed Status Update",
        "description": "The NPU segment allows the updating of census (bed status) data without sending patient-specific data. An example might include changing the status of a bed from housekeeping to unoccupied."
    },
    {
        "id": "NSC",
        "type": "Segment",
        "label": "NSC - Application Status Change",
        "description": "The NSC segment is used to inform (NMR query response) or announce (NMD unsolicited update) the start-up, shut-down, and/or migration (to a different cpu or file-server/file-system) of a particular application.\r\n\r\nUsage Notes: Fields 2-9.  These are not applicable (\u201cn/a\u201d) when the type of change being requested or reported is start-up or shut-down.  If the change is of type \"M\", at least one of fields 2-5 must be different from its corresponding field in range 6-9. \r\n\r\nFields 4-5, 8-9.  See definitions for the MSH, message header segment, for fields 3-4, for system and facility.  \"Application\" is available for interfacing with lower level protocols.  \"Facility\" is entirely site-defined. \r\n\r\nFields 2-3, 6-7. Entirely site-defined. "
    },
    {
        "id": "NST",
        "type": "Segment",
        "label": "NST - Application control level statistics",
        "description": "The NST segment allows application control-level statistical information to be passed between the various systems on the network. Some fields in this segment refer to portions of lower level protocols; they contain information that can be used by application management applications monitoring the state of various network links.\r\n\r\nUsage Notes: Fields 2-15.  These are all marked optional since the statistics kept on a particular link and negotiated between the two systems in question will vary.  Not all values will apply to each system.  Some values are concerned with the type of port, and some values pertain to the lower level protocol."
    },
    {
        "id": "NTE",
        "type": "Segment",
        "label": "NTE - Notes and Comments",
        "description": "The NTE segment is defined here for inclusion in messages defined in other chapters. It is commonly used for sending notes and comments."
    },
    {
        "id": "OBR",
        "type": "Segment",
        "label": "OBR - Observation Request",
        "description": "The Observation Request (OBR) segment is used to transmit information specific to an order for a diagnostic study or observation, physical exam, or assessment.  "
    },
    {
        "id": "OBX",
        "type": "Segment",
        "label": "OBX - Observation/Result",
        "description": "The OBX segment is used to transmit a single observation or observation fragment. It represents the smallest indivisible unit of a report. The OBX segment can also contain encapsulated data, e.g., a CDA document or a DICOM image.\r\n\r\nIts principal mission is to carry information about observations in report messages.  But the OBX can also be part of an observation order.  In this case, the OBX carries clinical information needed by the filler to interpret the observation the filler makes.  For example, an OBX is needed to report the inspired oxygen on an order for a blood oxygen to a blood gas lab, or to report the menstrual phase information which should be included on an order for a pap smear to a cytology lab.  Appendix 7A includes codes for identifying many of pieces of information needed by observation producing services to properly interpret a test result.  OBX is also found in other HL7 messages that need to include patient clinical information. "
    },
    {
        "id": "ODS",
        "type": "Segment",
        "label": "ODS - Dietary Orders, Supplements, and Preferences",
        "description": "The ORC sequence items of interest to ODS are ORC-1-order control, ORC-2-placer order number, ORC-3-filler order number, ORC-7-quantity/timing, ORC-9-date/time of transaction, ORC-10-entered by, and ORC-11-verified by. For ORC-1-order control, the values may be New (NW), Cancel (CA), Discontinue Order Request (DC), Change (XO), Hold Order Request (HD), and Release Previous Hold (RL). The HD and RL codes could stop service for a specified length of time. ORC-7-quantity/timing should be used to specify whether an order is continuous or for one service period only. It is also useful for supplements which are part of a diet but only delivered, say, every day at night."
    },
    {
        "id": "ODT",
        "type": "Segment",
        "label": "ODT - Diet Tray Instructions",
        "description": "This segment addresses tray instructions. These are independent of diet codes, supplements, and preferences and therefore get separate order numbers."
    },
    {
        "id": "OM1",
        "type": "Segment",
        "label": "OM1 - General Segment",
        "description": "The OM1 segment contains the attributes that apply to the definition of most observations.  This segment also contains the field attributes that specify what additional segments might also be defined for this observation. "
    },
    {
        "id": "OM2",
        "type": "Segment",
        "label": "OM2 - Numeric Observation",
        "description": "This segment contains the attributes of observations with continuous values (including those with data types of numeric, date, or time stamp).  It can be applied to observation batteries of type A and C (see OM1-18 - Nature of Service/Test/Observation)"
    },
    {
        "id": "OM3",
        "type": "Segment",
        "label": "OM3 - Categorical Service/Test/Observation",
        "description": "This segment applies to free text and other non-numeric data types."
    },
    {
        "id": "OM4",
        "type": "Segment",
        "label": "OM4 - Observations that Require Specimens",
        "description": "This segment applies to observations/batteries that require a specimen for their performance.  When an observation or battery requires multiple specimens for their performance (e.g., creatinine clearance requires a 24-hour urine specimen and a serum specimen), multiple segments may be included, one for each specimen type."
    },
    {
        "id": "OM5",
        "type": "Segment",
        "label": "OM5 - Observation Batteries (Sets)",
        "description": "This segment contains the information about batteries and supersets (a nature code of F, P or S, as described in OM1-18 - Nature of Service/Test/Observation)."
    },
    {
        "id": "OM6",
        "type": "Segment",
        "label": "OM6 - Observations that are Calculated from Other Observations",
        "description": "This segment contains the information about quantities that are derived from one or more other quantities or direct observations by mathematical or logical means."
    },
    {
        "id": "OM7",
        "type": "Segment",
        "label": "OM7 - Additional Basic Attributes",
        "description": "The OM7 segment contains additional basic attributes that apply to the definition of most observations/services."
    },
    {
        "id": "ORC",
        "type": "Segment",
        "label": "ORC - Common Order",
        "description": "The Common Order segment (ORC) is used to transmit fields that are common to all orders (all types of services that are requested). The ORC segment is required in the Order (ORM) message. ORC is mandatory in Order Acknowledgment (ORR) messages if an order detail segment is present, but is not required otherwise.\r\n\r\nIf details are needed for a particular type of order segment (e.g., Pharmacy, Dietary), the ORC must precede any order detail segment (e.g., RXO, ODS).  In some cases, the ORC may be as simple as the string ORC|OK|<placer order number>|<filler order number>|<cr>. \r\n\r\nIf details are not needed for the order, the order detail segment may be omitted.  For example, to place an order on hold, one would transmit an ORC with the following fields completed: ORC-1-order control with a value of HD, ORC-2-placer order number, and ORC-3-filler order number."
    },
    {
        "id": "ORG",
        "type": "Segment",
        "label": "ORG - Practitioner Organization Unit",
        "description": "The ORG segment relates a practitioner to an organization unit and adds detailed information regarding the practitioner's practicing specialty in that organization unit. An ORG segment may optionally follow an STF segment. An ORG segment must always have been preceded by a corresponding STF segment. If no organization unit is specified, this segment is used to relate practitioners with their practicing specialties, including effective and end dates. When it is not necessary to record organization unit or dates associated with the practicing specialty, this data is recorded in PRA-3-Practitioner Category."
    },
    {
        "id": "OVR",
        "type": "Segment",
        "label": "OVR - Override Segment",
        "description": "Definition: This segment allows a sender to override specific receiving applications business rules to allow for processing of a message that would normally be rejected or ignored.\r\n\r\nThe following is an example of how the OVR segment might be used in a dispense message (RDS_O13): MSH PID PV1 {ORC RXE {RXR} RXD {RXR} <RXC> <NTE> <FT1> <OVR>}"
    },
    {
        "id": "PCR",
        "type": "Segment",
        "label": "PCR - Possible Causal Relationship",
        "description": "The PCR segment is used to communicate a potential or suspected relationship between a product (drug or device) or test and an event with detrimental effect on a patient. This segment identifies a potential causal relationship between the product identified in this segment and the event identified in the PEO segment."
    },
    {
        "id": "PD1",
        "type": "Segment",
        "label": "PD1 - Patient Additional Demographic",
        "description": "The patient additional demographic segment contains demographic information that is likely to change about the patient."
    },
    {
        "id": "PDA",
        "type": "Segment",
        "label": "PDA - Patient Death and Autopsy",
        "description": "This segment carries information on a patients death and possible autopsy."
    },
    {
        "id": "PDC",
        "type": "Segment",
        "label": "PDC - Product Detail Country",
        "description": ""
    },
    {
        "id": "PEO",
        "type": "Segment",
        "label": "PEO - Product Experience Observation",
        "description": "Details related to a particular clinical experience or event are embodied in the PEO segment. This segment can be used to characterize an event which might be attributed to a product to which the patient was exposed. Products with a possible causal relationship to the observed experience are described in the following PCR (possible causal relationship) segments. The message format was designed to be robust and includes many optional elements which may not be required for a particular regulatory purpose but allow a complete representation of the drug experience if needed."
    },
    {
        "id": "PES",
        "type": "Segment",
        "label": "PES - Product Experience Sender",
        "description": ""
    },
    {
        "id": "PID",
        "type": "Segment",
        "label": "PID - Patient Identification",
        "description": "The PID segment is used by all applications as the primary means of communicating patient identification information. This segment contains permanent patient identifying and demographic information that, for the most part, is not likely to change frequently."
    },
    {
        "id": "PR1",
        "type": "Segment",
        "label": "PR1 - Procedures",
        "description": "The PR1 segment contains information relative to various types of procedures that can be performed on a patient. The PR1 segment can be used to send procedure information, for example: Surgical, Nuclear Medicine, X-ray with contrast, etc. The PR1 segment is used to send multiple procedures, for example, for medical records encoding or for billing systems."
    },
    {
        "id": "PRA",
        "type": "Segment",
        "label": "PRA - Practitioner Detail",
        "description": "The PRA segment adds detailed medical practitioner information to the personnel identified by the STF segment.  A PRA segment may optionally follow an STF segment.  A PRA segment must always have been preceded by a corresponding STF segment.  The PRA segment may also be used for staff who work in healthcare who are not practitioners, but need to be certified, e.g., \u201cmedical records staff.\u201d"
    },
    {
        "id": "PRB",
        "type": "Segment",
        "label": "PRB - Problem Details",
        "description": "The problem detail segment contains the data necessary to add, update, correct, and delete the problems of a given individual."
    },
    {
        "id": "PRC",
        "type": "Segment",
        "label": "PRC - Pricing",
        "description": "The PRC segment contains the pricing information for the preceding CDM segment\u2019s chargeable item.  It contains the fields which, for the same chargeable item, might vary depending upon facility or department or patient type.  The preceding CDM segment contains the fields which, for one chargeable item, remain the same across facilities, departments, and patient types."
    },
    {
        "id": "PRD",
        "type": "Segment",
        "label": "PRD - Provider Data",
        "description": "This segment will be employed as part of a patient referral message and its related transactions. The PRD segment contains data specifically focused on a referral, and it is inter-enterprise in nature. The justification for this new segment comes from the fact that we are dealing with referrals that are external to the facilities that received them. Therefore, using a segment such as the current PV1 would be inadequate for all the return information that may be required by the receiving facility or application. In addition, the PV1 does not always provide information sufficient to enable the external facility to make a complete identification of the referring entity. The information contained in the PRD segment will include the referring provider, the referred-to provider, the referred-to location or service, and the referring provider clinic address."
    },
    {
        "id": "PSH",
        "type": "Segment",
        "label": "PSH - Product Summary Header",
        "description": ""
    },
    {
        "id": "PTH",
        "type": "Segment",
        "label": "PTH - Pathway",
        "description": "The pathway segment contains the data necessary to add, update, correct, and delete from the record pathways that are utilized to address an individuals health care."
    },
    {
        "id": "PV1",
        "type": "Segment",
        "label": "PV1 - Patient Visit",
        "description": "The PV1 segment is used by Registration/Patient Administration applications to communicate information on an account or visit-specific basis. The default is to send account level data. To use this segment for visit level data PV1-51 - Visit Indicator must be valued to V. The value of PV-51 affects the level of data being sent on the PV1, PV2, and any other segments that are part of the associated PV1 hierarchy (e.g. ROL, DG1, or OBX)."
    },
    {
        "id": "PV2",
        "type": "Segment",
        "label": "PV2 - Patient Visit - Additional Information",
        "description": "The PV2 segment is a continuation of information contained on the PV1 segment."
    },
    {
        "id": "QAK",
        "type": "Segment",
        "label": "QAK - Query Acknowledgment",
        "description": "The QAK segment contains information sent with responses to a query. Although the QAK segment is required in the responses to the enhanced queries, it may appear as an optional segment placed after the (optional) ERR segment in any query response (message) to any original mode query."
    },
    {
        "id": "QID",
        "type": "Segment",
        "label": "QID - Query Identification",
        "description": "The QID segment contains the information necessary to uniquely identify a query. Its primary use is in query cancellation or subscription cancellation."
    },
    {
        "id": "QPD",
        "type": "Segment",
        "label": "QPD - Query Parameter Definition",
        "description": "The QPD segment defines the parameters of the query."
    },
    {
        "id": "QRD",
        "type": "Segment",
        "label": "QRD - Original-Style Query Definition",
        "description": "This segment is not carried forward to the recommended queries for v 2.4.\r\n\r\nThe QRD segment is used to define a query."
    },
    {
        "id": "QRF",
        "type": "Segment",
        "label": "QRF - Original style query filter",
        "description": "This segment is not carried forward to the recommended queries for v 2.4.\r\n\r\nThe QRF segment is used with the QRD segment to further refine the content of an original style query. "
    },
    {
        "id": "QRI",
        "type": "Segment",
        "label": "QRI - Query Response Instance",
        "description": "The QRI segment is used to indicate the weight match for a returned record (where the responding system employs a numeric algorithm) and/or the match reason code (where the responding system uses rules or other match options)."
    },
    {
        "id": "RCP",
        "type": "Segment",
        "label": "RCP - Response Control Parameter",
        "description": "The RCP segment is used to restrict the amount of data that should be returned in response to query."
    },
    {
        "id": "RDF",
        "type": "Segment",
        "label": "RDF - Table Row Definition",
        "description": "The RDF segment defines the content of the row data segments (RDT) in the tabular response (RTB)."
    },
    {
        "id": "RDT",
        "type": "Segment",
        "label": "RDT - Table Row Data",
        "description": "The RDT segment contains the row data of the tabular data response message (TBR)."
    },
    {
        "id": "RF1",
        "type": "Segment",
        "label": "RF1 - Referral Information",
        "description": "This segment represents information that may be useful when sending referrals from the referring provider to the referred-to provider."
    },
    {
        "id": "RGS",
        "type": "Segment",
        "label": "RGS - Resource Group",
        "description": "The RGS segment is used to identify relationships between resources identified for a scheduled event. This segment can be used, on a site specified basis, to identify groups of resources that are used together within a scheduled event, or to describe some other relationship between resources. To specify related groups of resources within a message, begin each group with an RGS segment, and then follow that RGS with one or more of the Appointment Information segments (AIG, AIL, AIS, or AIP).\r\n\r\nIf a message does not require any grouping of resources, then specify a single RGS in the message, and follow it with all of the Appointment Information segments for the scheduled event.   (At least one RGS segment is required in each message \u2013 even if no grouping of resources is required \u2013 to allow parsers to properly understand the message.) "
    },
    {
        "id": "RMI",
        "type": "Segment",
        "label": "RMI - Risk Management Incident",
        "description": "The RMI segment is used to report an occurrence of an incident event pertaining or attaching to a patient encounter."
    },
    {
        "id": "ROL",
        "type": "Segment",
        "label": "ROL - Role",
        "description": "The role segment contains the data necessary to add, update, correct, and delete from the record persons involved, as well as their functional involvement with the activity being transmitted."
    },
    {
        "id": "RQ1",
        "type": "Segment",
        "label": "RQ1 - Requisition Detail-1",
        "description": "RQ1 contains additional detail for each nonstock requisitioned item. This segment definition is paired with a preceding RQD segment."
    },
    {
        "id": "RQD",
        "type": "Segment",
        "label": "RQD - Requisition Detail",
        "description": "RQD contains the detail for each requisitioned item."
    },
    {
        "id": "RXA",
        "type": "Segment",
        "label": "RXA - Pharmacy/Treatment Administration",
        "description": "The ORC must have the filler order number and the order control code RE. As a site-specific variant, the RXO and associated RXCs and/or the RXE (and associated RXCs) may be present if the receiving application needs any of their data. The RXA carries the administration data."
    },
    {
        "id": "RXC",
        "type": "Segment",
        "label": "RXC - Pharmacy/Treatment Component Order",
        "description": "If the drug or treatment ordered with the RXO segment is a compound drug OR an IV solution, AND there is not a coded value for OBR-4-universal service ID , which specifies the components (base and all additives), then the components (the base and additives) are specified by two or more RXC segments. The policy of the pharmacy or treatment application on substitutions at the RXC level is identical to that for the RXO level."
    },
    {
        "id": "RXD",
        "type": "Segment",
        "label": "RXD - Pharmacy/Treatment Dispense",
        "description": ""
    },
    {
        "id": "RXE",
        "type": "Segment",
        "label": "RXE - Pharmacy/Treatment Encoded Order",
        "description": "The RXE segment details the pharmacy or treatment application's encoding of the order. It also contains several pharmacy-specific order status fields, such as RXE-16-number of refills remaining, RXE-17-number of refills/doses dispensed, RXE-18-D/T of most recent refill or dose dispensed, and RXE-19-total daily dose."
    },
    {
        "id": "RXG",
        "type": "Segment",
        "label": "RXG - Pharmacy/Treatment Give",
        "description": ""
    },
    {
        "id": "RXO",
        "type": "Segment",
        "label": "RXO - Pharmacy/Treatment Order",
        "description": "This is the \"master\" pharmacy/treatment order segment. It contains order data not specific to components or additives. Unlike the OBR, it does not contain status fields or other data that are results-only."
    },
    {
        "id": "RXR",
        "type": "Segment",
        "label": "RXR - Pharmacy/Treatment Route",
        "description": "The Pharmacy/Treatment Route segment contains the alternative combination of route, site, administration device, and administration method that are prescribed as they apply to a particular order. The pharmacy, treatment staff and/or nursing staff has a choice between the routes based on either their professional judgment or administration instructions provided by the physician."
    },
    {
        "id": "SAC",
        "type": "Segment",
        "label": "SAC - Specimen Container detail",
        "description": "The container detail segment is the data necessary to maintain the containers that are being used throughout the Laboratory Automation System."
    },
    {
        "id": "SCH",
        "type": "Segment",
        "label": "SCH - Scheduling Activity Information",
        "description": "The SCH segment contains general information about the scheduled appointment."
    },
    {
        "id": "SFT",
        "type": "Segment",
        "label": "SFT - Software Segment",
        "description": "This segment provides additional information about the software product(s) used as a Sending Application. The primary purpose of this segment is for diagnostic use. There may be additional uses per site-specific agreements.\r\n\r\nExample: MSH [{ SFT }] \u2026.. "
    },
    {
        "id": "SID",
        "type": "Segment",
        "label": "SID - Substance Identifier",
        "description": "The Substance Identifier segment contains data necessary to identify the substance (e.g., reagents) used in the production of analytical test results. The combination of these fields must uniquely identify the substance, i.e., depending on the manufacturer all or some fields are required (this is the reason the optionality is 'C' (conditional)). If the analysis requires multiple substances, this segment is repeated for each substance. The segment(s) should be attached to the TCD segment.\r\n\r\nAnother purpose of this segment is to transfer the control manufacturer, lot, etc. information for control specimens. In this case the SID segment should be attached to the SAC segment describing the container with the control specimen. "
    },
    {
        "id": "SPM",
        "type": "Segment",
        "label": "SPM - Specimen",
        "description": "The intent of this segment is to describe the characteristics of a specimen. It differs from the intent of the OBR in that the OBR addresses order-specific information. It differs from the SAC segment in that the SAC addresses specimen container attributes. An advantage afforded by a separate specimen segment is that it generalizes the multiple relationships among order(s), results, specimen(s) and specimen container(s)."
    },
    {
        "id": "SPR",
        "type": "Segment",
        "label": "SPR - Stored Procedure Request Definition",
        "description": "This segment is not carried forward to the recommended queries for v 2.4.\r\n\r\nThe SPR segment is used to issue queries using stored procedure calls.  Refer to the functional chapters for the lists of HL7-defined stored procedure names, input parameters and output tables."
    },
    {
        "id": "STF",
        "type": "Segment",
        "label": "STF - Staff Identification",
        "description": "The STF segment can identify any personnel referenced by information systems.  These can be providers, staff, system users, and referring agents.  In a network environment, this segment can be used to define personnel to other applications; for example, order entry clerks, insurance verification clerks, admission clerks, as well as provider demographics. When using the STF and PRA segments in the Staff/Practitioner Master File message, MFE-4-primary key value is used to link all the segments pertaining to the same master file entry.  Therefore, in the MFE segment, MFE-4-primary key value must be filled in.  Other segments may follow the STF segment to provide data for a particular type of staff member. The PRA segment (practitioner) is one such.  It may optionally follow the STF segment in order to add practitionerspecific data. Other segments may be defined as needed. When using the segments included in this chapter for other then Staff/Practitioner Master File messages, disregard references to MFE-4 - primary key value. "
    },
    {
        "id": "TCC",
        "type": "Segment",
        "label": "TCC - Test Code Configuration",
        "description": "The test (e.g., analyte) code configuration segment is the data necessary to maintain and transmit information concerning the test entity codes that are being used throughout the \"automated system.\""
    },
    {
        "id": "TCD",
        "type": "Segment",
        "label": "TCD - Test Code Detail",
        "description": "The test code detail segment contains the data necessary to perform operations or calculations, or execute decisions by the laboratory automation system, and which are not supported by the original HL7 segments related to orders (ORC, OBR)."
    },
    {
        "id": "TQ1",
        "type": "Segment",
        "label": "TQ1 - Timing/Quantity",
        "description": "The TQ1 segment is used to specify the complex timing of events and actions such as those that occur in order management and scheduling systems. This segment determines the quantity, frequency, priority, and timing of a service. By allowing the segment to repeat, it is possible to have service requests that vary the quantity, frequency and priority of a service request over time."
    },
    {
        "id": "TQ2",
        "type": "Segment",
        "label": "TQ2 - Timing/Quantity Relationship",
        "description": "The TQ2 segment is used to form a relationship between the service request the TQ1/TQ2 segments are associated with, and other service requests. The TQ2 segment will link the current service request with one or more other service requests."
    },
    {
        "id": "TXA",
        "type": "Segment",
        "label": "TXA - Transcription Document Header",
        "description": "The TXA segment contains information specific to a transcribed document but does not include the text of the document. The message is created as a result of a document status change. This information updates other healthcare systems and allows them to identify reports that are available in the transcription system. By maintaining the TXA message information in these systems, the information is available when constructing queries to the transcription system requesting the full document text."
    },
    {
        "id": "UB1",
        "type": "Segment",
        "label": "UB1 - UB82 Data",
        "description": "The UB1 segment contains the data necessary to complete UB82 bills specific to the United States; other realms may choose to implement using regional code sets. Only UB82 fields that do not exist in other HL7 defined segments appear in this segment. Patient Name and Date of Birth are required for UB82 billing; however, they are included in the PID segment and therefore do not appear here. The UB codes listed as examples are not an exhaustive or current list. Refer to a UB specification for additional information.\r\n\r\nThe Uniform Billing segments are specific to the US and may not be implemented in non-US systems. "
    },
    {
        "id": "UB2",
        "type": "Segment",
        "label": "UB2 - UB92 Data",
        "description": "The UB2 segment contains data necessary to complete UB92 bills specific to the United States; other realms may choose to implement using regional code sets. Only UB82 and UB92 fields that do not exist in other HL7 defined segments appear in this segment.  Just as with the UB82 billing, Patient Name and Date of Birth are required; they are included in the PID segment and therefore do not appear here. When the field locators are different on the UB92, as compared to the UB82, the element is listed with its new location in parentheses ( ). The UB codes listed as examples are not an exhaustive or current list; refer to a UB specification for additional information.\r\n\r\nThe Uniform Billing segments are specific to the US and may not be implemented in non-US systems."
    },
    {
        "id": "URD",
        "type": "Segment",
        "label": "URD - Results/update Definition",
        "description": "This segment is not carried forward to the recommended queries for v 2.4.\r\n\r\nThe URD segment is used in sending unsolicited updates about orders and results.  Its purpose is similar to that of the QRD segment, but from the results/unsolicited update point of view.  Some of the fields have parallels in the QRD segment. "
    },
    {
        "id": "URS",
        "type": "Segment",
        "label": "URS - Unsolicited Selection",
        "description": "This segment is not carried forward to the recommended queries for v 2.4.\r\n\r\nThe URS segment is identical with the QRF segment, except that if the name of any field contains Query (of QRY), this word has been changed to Results (see URS-5-R/U other results subject definition)."
    },
    {
        "id": "VAR",
        "type": "Segment",
        "label": "VAR - Variance",
        "description": "The variance segment contains the data necessary to describe differences that may have occurred at the time when a healthcare event was documented."
    },
    {
        "id": "VTQ",
        "type": "Segment",
        "label": "VTQ - Virtual Table Query Request",
        "description": "This segment is not carried forward to the recommended queries for v 2.4.\r\n\r\nThe VTQ segment is used to define queries that are responded to with the Tabular Data Message (TBR).  The VTQ query message is an alternate method to the EQQ query message that some systems may find easier to implement, due to its use of HL7 delimiters that separate components of the selection definition, and its limited selection criteria.  Queries involving complex selection criteria (nested operators, etc.) may need to be formatted as an EQL segment. "
    }
]

module.exports = {
segmentInfoArr,
}