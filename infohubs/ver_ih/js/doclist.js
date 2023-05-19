//
// Copyright 2005-2017 Mentor Graphics Corporation
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
var mInfoHub = "ver_ih";
var mProductList = "Calibre 3DSTACK, Calibre Auto-Waivers, Calibre AutoFix, Calibre DESIGNrev, Calibre Interactive, Calibre&nbsp;nmDRC/nmDRC-H, Calibre nmLVS/nmLVS-H, Calibre Pattern Matching, Calibre PERC, Calibre Query Server, Calibre RealTime, Calibre RVE, Calibre SVRFencrypt, Calibre TVFencrypt";

var Entry;
var List;

SetDefaultListSize(23);


// Online Help & Manuals
IHTab_Olh.fVisible( true );

Entry = new TabEntry_Object( "Physical Verification" );

// Entry = new TabEntry_Object( "Release Notes" );
// List = new List_Object("doclist", "sort");
// List.fAddItem( "Calibre Release Notes", "calbr_rn"  );
// Entry.fAddList( List );
// IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "User's and Reference Manuals" );
List = new List_Object("doclist", "sort");
List.fAddItem( "Calibre Release Notes", "calbr_rn"  );
List.fAddItem( "Standard Verification Rule Format (SVRF) Manual", "svrf_ur"  );
List.fAddItem( "Calibre DESIGNrev Reference Manual", "calbr_drv_ref" );
List.fAddItem( "Calibre DESIGNrev Layout Viewer User's Manual", "calbr_drv_user"  );
List.fAddItem( "Calibre Layout Comparison and Translation Guide", "calbr_lvl_fdi_gd"  );
List.fAddItem( "Open Artwork System Interchange Standard (OASIS)", "calbr_oasis_gd"  );
List.fAddItem( "Calibre Interactive User's Manual", "calbr_interactive_user"  );
List.fAddItem( "Calibre Interactive (New GUI) User's Manual", "calbr_interactive_n_user"  );
List.fAddItem( "Calibre RVE User's Manual", "calbr_rve_user"  );
List.fAddItem( "Calibre Query Server Manual", "calbr_query_user" );
List.fAddItem( "Calibre SVRFencrypt User's Manual", "calbr_svrfencrypt_user"  );
List.fAddItem( "Calibre TVFencrypt User's Manual", "calbr_tvfencrypt_user" );
List.fAddItem( "Calibre Verification User's Manual", "calbr_ver_user" );
List.fAddItem( "Calibre Solutions for Physical Verification", "calbr_solns_pv_user" );
//List.fAddItem( "Calibre Litho-Friendly Design User's Manual", "calbr_lfd_user"  );
List.fAddItem( "Calibre PERC User's Manual", "calbr_perc_user"  );
List.fAddItem( "Calibre Pattern Matching User's Manual", "calbr_pmatch_user"  );
List.fAddItem( "Calibre Pattern Matching Reference Manual", "calbr_pmatch_ref"  );
List.fAddItem( "Calibre RealTime Custom User's Manual", "calbr_realtime_user"  );
List.fAddItem( "Calibre RealTime Digital User's Manual", "calbr_realtime_digital_user"  );
List.fAddItem( "Calibre 3DSTACK User's Manual", "calbr_3dstack_user"  );
List.fAddItem( "Calibre Auto-Waivers User's and Reference Manual", "calbr_autowaiver_useref"  );
List.fAddItem( "Calibre AutoFix User's Manual", "calbr_autofix_user"  );
List.fAddItem( "Calibre YieldServer Reference Manual", "calbr_ys_ref" );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );


Entry = new TabEntry_Object( "Quick Reference" );
List = new List_Object("doclist", "sort");
List.fAddItem( "Calibre 3DSTACK Quick Reference", "calbr_3dstack_qref", "pdf"  );
List.fAddItem( "Calibre Chip-Level Verification Quick Reference", "calbr_chip_verification_qref", "pdf"  );
List.fAddItem( "Calibre RVE for LVS Quick Reference", "calbr_lvsrve_qref", "pdf"  );
List.fAddItem( "Calibre RVE for DRC Quick Reference", "calbr_drcrve_qref", "pdf"  );
List.fAddItem( "Calibre RVE for PERC Quick Reference", "calbr_percrve_qref", "pdf"  );
List.fAddItem( "Calibre eqDRC Quick Reference", "calbr_eqdrc_qref", "pdf"  );
List.fAddItem( "Calibre Interactive (New GUI) Quick Reference", "calbr_interactive_n_qref", "pdf"  );
List.fAddItem( "Calibre FDI Mapping Quick Reference", "calbr_fdi_map_qref", "pdf"  );
List.fAddItem( "Calibre DESIGNrev Key Definitions Quick Reference", "calbr_drv_keydef_qref", "pdf"  );
List.fAddItem( "Calibre RealTime Digital in Cadence Innovus Quick Reference", "calbr_realtime_innovus_qref"  );
List.fAddItem( "Calibre RealTime Integration to Cadence Virtuoso Quick Reference", "calbr_realtime_virtuoso_qref", "pdf"  );
List.fAddItem( "Calibre RealTime Digital in Synopsys IC Compiler II Quick Reference", "calbr_realtime_icc2_qref", "pdf"  );
List.fAddItem( "Calibre RealTime Integration to Synopsys Laker Quick Reference", "calbr_realtime_laker_qref", "pdf"  );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Tutorials and Example Kits (eKits) for Physical Verification on Support Center" );
Entry.fSetBodyText( "Tutorials and example kits contain design data, rule files, and instructions for running and learning more about the tool."  );
Entry.fAddLink( "Try It! Calibre Tutorials and Example Kits", "cal_ekit_IC", "Click the link to go to the Support Center listing of eKits for Physical Verification." );
IHTab_Olh.fAddEntry( Entry );

// Training
IHTab_Training.fVisible( true );
Entry = new TabEntry_Object( "Tutorials and Example Kits" );
Entry.fSetBodyText( "Tutorials and eKits contain design data, rule files, and instructions for running and learning more about the tool."  );
Entry.fAddLink( "Try It! Calibre Tutorials and eKits for Physical Verification", "cal_ekit_IC", "Click the link to go to the Support Center listing of eKits for Physical Verification. "
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
