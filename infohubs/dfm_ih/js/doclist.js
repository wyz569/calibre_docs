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
var mInfoHub = "dfm_ih";
var mProductList = "Calibre CMP Modeling, Calibre CMPAnalyzer, Calibre LFD, Calibre YieldAnalyzer, Calibre YieldEnhancer, Calibre YieldServer";

var Entry;
var List;

SetDefaultListSize(17);

// Online Help & Manuals
IHTab_Olh.fVisible( true );

Entry = new TabEntry_Object( "Design for Manufacturability" );

//Entry = new TabEntry_Object( "Release Notes" );
//List = new List_Object("doclist", "sort");
//List.fAddItem( "Calibre Release Notes", "calbr_rn"  );
//Entry.fAddList( List );
//IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "User's and Reference Manuals" );
List = new List_Object("doclist", "sort");
List.fAddItem( "Calibre Release Notes", "calbr_rn"  );
List.fAddItem( "Calibre CMPAnalyzer User's Manual", "calbr_cmpanalyzer_user"  );
List.fAddItem( "Calibre CMP Model Builder User's and Reference Manual", "calbr_cmp_model_useref"  );
List.fAddItem( "Calibre Litho-Friendly Design User's Manual", "calbr_lfd_user"  );
//List.fAddItem( "Calibre LogView User's Manual", "calbr_logview_user"  );
List.fAddItem( "Calibre LSG for Synthetic Layout Generation User's Manual", "calbr_lsg_user"  );
List.fAddItem( "Calibre YieldAnalyzer and YieldEnhancer User's and Reference Manual", "calbr_yaye_ref" );
List.fAddItem( "Calibre YieldServer Reference Manual", "calbr_ys_ref" );
List.fAddItem( "Standard Verification Rule Format (SVRF) Manual", "svrf_ur"  );
List.fAddItem( "Calibre DESIGNrev Layout Viewer User's Manual", "calbr_drv_user" );
List.fAddItem( "Calibre DESIGNrev Reference Manual", "calbr_drv_ref" );
List.fAddItem( "Calibre Interactive User's Manual", "calbr_interactive_user"  );
List.fAddItem( "Calibre Interactive (New GUI) User's Manual", "calbr_interactive_n_user"  );
List.fAddItem( "Calibre RVE User's Manual", "calbr_rve_user"  );
List.fAddItem( "Calibre Solutions for Physical Verification", "calbr_solns_pv_user" );
List.fAddItem( "Calibre SVRFencrypt User's Manual", "calbr_svrfencrypt_user"  );
List.fAddItem( "Calibre TVFencrypt User's Manual", "calbr_tvfencrypt_user" );
List.fAddItem( "Calibre Verification User's Manual", "calbr_ver_user"  );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );

// Entry = new TabEntry_Object( "Examples, Tutorials, and Utilities" );
// Entry.fAddLink( "Download \"A Quick Start to Calibre Tools\" and other available examples from SupportNet", "utilities", "
// 1. Log in to SupportNet.<br>
// 2. Accept the License Agreement.<br>
// 3. Select \"Calibre examples\" (located in the \"View utilities by product\" list).<br>
// 4. Right click an example to save the download." );
// IHTab_Olh.fAddEntry( Entry );

// Entry = new TabEntry_Object( "Examples, Tutorials, and Utilities");
// List = new List_Object("doclist", "sort" );
// List.fSetTitle( "Download \"A Quick Start to Calibre Tools\" and other available examples from SupportNet", "utilities" );
// List.fSetBodyText( "A Quick Start to Calibre Tools along with other examples and tutorials is available here." );
// List.fAddItem( "Calibre eKit and Tutorial Installation Instructions","calbr_ekit_install","pdf"  );
// Entry.fAddList( List );
// IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Quick Reference" );
List = new List_Object("doclist", "sort");
List.fAddItem( "Calibre Example Kit (eKit) and Tutorial Download and Installation Quick Reference", "calbr_ekit_install_qref", "pdf"  );
List.fAddItem( "Calibre DESIGNrev Key Definitions Quick Reference", "calbr_drv_keydef_qref", "pdf"  );
List.fAddItem( "Calibre eqDRC Quick Reference", "calbr_eqdrc_qref", "pdf"  );
List.fAddItem( "Calibre Interactive (New GUI) Quick Reference", "calbr_interactive_n_qref", "pdf"  );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Tutorials and Example Kits (eKits) for DFM on Support Center" );
Entry.fSetBodyText( "Tutorials and example kits contain design data, rule files, and instructions for running and learning more about the tool."  );
Entry.fAddLink( "Try It! Calibre Tutorials and Example Kits", "cal_ekit_DFM", "(Support Center, Documentation, Document Types=Getting Started Guide)" );
//Click the link to go to the Support Center listing of eKits for DFM.
IHTab_Olh.fAddEntry( Entry );

// Training
IHTab_Training.fVisible( true );
Entry = new TabEntry_Object( "Tutorials and Example Kits" );
Entry.fSetBodyText( "Tutorials and eKits contain design data, rule files, and instructions for running and learning more about the tool."  );
//Entry.fAddLink( "Calibre eKits and tutorials", "caldocs", "On Support Center, go to Documentation > Getting Started Guide document type to access eKits and tutorials." );
Entry.fAddLink( "Try It! Calibre Tutorials and eKits for DFM", "cal_ekit_DFM", "Click the link to go to the Support Center listing of eKits for DFM. "
						 + "<br>To download an eKit for an earlier release, choose the release in the \"Restrict content to version\" dropdown list." );

IHTab_Training.fAddEntry( Entry );

Entry = new TabEntry_Object( "Videos and Training" );
//Entry.fAddLink( "How-To Video Library", "cal_howto_videos", "On mentor.com, access videos relating to most of the Calibre products." );
Entry.fAddLink( "Instructor-led and online training courses", "training" );

IHTab_Training.fAddEntry( Entry );


// Support
IHTab_Support.fVisible( true );

Entry = new TabEntry_Object( "Technical Support & Downloads");
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
