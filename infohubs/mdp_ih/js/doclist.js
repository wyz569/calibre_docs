//
// Copyright 2005-2011 Mentor Graphics Corporation
//
//    All Rights Reserved.
//
// THIS WORK CONTAINS TRADE SECRET
// AND PROPRIETARY INFORMATION WHICH IS THE
// PROPERTY OF MENTOR GRAPHICS
// CORPORATION OR ITS LICENSORS AND IS
// SUBJECT TO LICENSE TERMS.
//

// InfoHub data
var mInfoHub = "mdp_ih";
var mProductList = "Calibre Cluster Manager, Calibre Dynamic Resource Allocation (DRA), Calibre FullScale, Calibre FRACTUREc, Calibre FRACTUREh, Calibre FRACTUREj, Calibre FRACTUREm, Calibre FRACTUREt, Calibre FRACTUREv, Calibre Job Deck Editor, Calibre MASKOPT, Calibre MDP EMBED, Calibre MDP Embedded SVRF, Calibre MDPDefectAvoidance, Calibre MDPmerge, Calibre MDPstat, Calibre MDPverify, Calibre MDPview, Calibre Metrology API (MAPI), Calibre MPCpro, Calibre MPCverify, Calibre nmMPC";

var Entry;
var List;

SetDefaultListSize(26);

// Online Help & Manuals
IHTab_Olh.fVisible( true );

Entry = new TabEntry_Object( "Mask Data Preparation" );


// Entry = new TabEntry_Object( "Release Notes" );
// List = new List_Object("doclist", "sort");
// List.fAddItem( "Calibre Release Notes", "calbr_rn"  );
// Entry.fAddList( List );
// IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "User's and Reference Manuals" );
List = new List_Object("doclist", "sort");
//List.fAddItem( "Calibre CalScope User's Manual", "calbr_calscope_user"  );
List.fAddItem( "Calibre Cluster Manager (CalCM) User's Manual", "calbr_cm_user"  );
List.fAddItem( "Calibre DESIGNrev Layout Viewer User's Manual", "calbr_drv_user" );
List.fAddItem( "Calibre DESIGNrev Reference Manual", "calbr_drv_ref" );
List.fAddItem( "Calibre Dynamic Resource Allocator (DRA) User's Manual", "calbr_dra_user" );
List.fAddItem( "Calibre Interactive User's Manual", "calbr_interactive_user"  );
List.fAddItem( "Calibre Interactive (New GUI) User's Manual", "calbr_interactive_n_user"  );
List.fAddItem( "Calibre RVE User's Manual", "calbr_rve_user"  );
List.fAddItem( "Calibre Job Deck Editor User's Manual", "calbr_jde_user"  );
List.fAddItem( "Calibre LogView User's Manual", "calbr_logview_user"  );
List.fAddItem( "Calibre Mask Data Preparation User's and Reference Manual", "calbr_mdp_useref"  );
List.fAddItem( "Calibre MDPAutoClassify User's Manual", "calbr_mdpautoclassify_user"  );
List.fAddItem( "Calibre MDPDefectAvoidance User's Manual", "calbr_mdpdefav_user"  );
List.fAddItem( "Calibre DefectClassify User's Manual", "calbr_defclass_user"  );
List.fAddItem( "Calibre DefectReview User's Manual", "calbr_defrev_user"  );
List.fAddItem( "Calibre MDPview User's and Reference Manual", "calbr_mdpview_useref"  );
List.fAddItem( "Calibre Metrology API (MAPI) User's and Reference Manual", "calbr_mapi_useref" );
List.fAddItem( "Calibre Metrology Interface (CMi) User's Manual", "calbr_cmi_user"  );
List.fAddItem( "Calibre MPCverify User's and Reference Manual", "calbr_mpcv_useref"  );
List.fAddItem( "Calibre nmMPC and Calibre nmCLMPC User's and Reference Manual", "calbr_nmmpc_useref"  );
List.fAddItem( "Calibre Post-Tapeout Flow User's Manual", "calbr_pto_user"  );
List.fAddItem( "Calibre Verification User's Manual", "calbr_ver_user"  );
List.fAddItem( "Open Artwork System Interchange Standard (OASIS)", "calbr_oasis_gd"  );
List.fAddItem( "Standard Verification Rule Format (SVRF) Manual", "svrf_ur"  );
List.fAddItem( "DFM Data Analysis User's and Reference Manual", "dfmda_useref"  );
List.fAddItem( "Calibre Release Notes", "calbr_rn"  );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );

// Entry = new TabEntry_Object( "Examples, Tutorials, and Utilities" );
// Entry.fAddLink( "Download \"A Quick Start to Calibre Tools\" and other available examples from SupportNet", "utilities", "
// 1. Log in to SupportNet.<br>
// 2. Accept the License Agreement.<br>
// 3. Select \"Calibre examples\" (located in the \"View utilities by product\" list).<br>
// 4. Right click an example to save the download." );
// IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Quick Reference" );
List = new List_Object("doclist", "sort");
//List.fSetTitle( "Quick Reference Cards" );
List.fAddItem( "Calibre DESIGNrev Key Definitions Quick Reference", "calbr_drv_keydef_qref", "pdf"  );
List.fAddItem( "Calibre Interactive (New GUI) Quick Reference", "calbr_interactive_n_qref", "pdf"  );
Entry.fAddList( List );
//Entry.fAddLink( "Tour of New Calibre RVE GUI", "calbr_rvetour_mv" );
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Tutorials and Example Kits (eKits) on Support Center" );
Entry.fSetBodyText( "Tutorials and example kits contain design data, rule files, and instructions for running and learning more about the tool."  );
Entry.fAddLink( "Try It! Calibre Tutorials and Example Kits", "cal_docs_gsguide", "Click the link to go to the Support Center listing of eKits." );
IHTab_Olh.fAddEntry( Entry );


// Training
IHTab_Training.fVisible( true );
Entry = new TabEntry_Object( "Tutorials and Example Kits" );
Entry.fSetBodyText( "Tutorials and eKits contain design data, rule files, and instructions for running and learning more about the tool."  );
Entry.fAddLink( "Try It! Calibre Tutorials and eKits", "cal_docs_gsguide", "Click the link to go to the Support Center listing of eKits. "
						 + "<br>To download an eKit for an earlier release, choose the release in the \"Restrict content to version\" dropdown list." );
IHTab_Training.fAddEntry( Entry );

Entry = new TabEntry_Object( "Videos and Training" );
//Entry.fAddLink( "How-To Video Library", "cal_howto_videos", "On mentor.com, access videos relating to most of the Calibre products." );
Entry.fAddLink( "Instructor-led and online training courses", "training" );
IHTab_Training.fAddEntry( Entry );



// Support
IHTab_Support.fVisible( true );

Entry = new TabEntry_Object( "Technical Support & Downloads" );
Entry.fAddLink( "Access Calibre Support Center site", "microsite" );
Entry.fAddLink( "Sign up for CustomerInsight Newsletter", "supportpro" );
IHTab_Support.fAddEntry( Entry );

Entry = new TabEntry_Object( "Communities" );
Entry.fAddLink( "Participate in IC Layout Verification and Optimization communities", "community", "A place to learn, share, and network with other designers." );
IHTab_Support.fAddEntry( Entry );

Entry = new TabEntry_Object( "Contact Us" );
Entry.fAddLink( "Send feedback on the documentation", "feedback" );
Entry.fAddLink( "Visit https://eda.sw.siemens.com/", "Siemens EDA" );
IHTab_Support.fAddEntry( Entry );
