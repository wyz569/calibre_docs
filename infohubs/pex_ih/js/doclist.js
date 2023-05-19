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
var mInfoHub = "pex_ih";
var mProductList = "Calibre xACT, Calibre xACT 3D, Calibre xACTView, Calibre xL, Calibre xRC, xCalibrate";

var Entry;
var List;

SetDefaultListSize(12);

// Online Help & Manuals
IHTab_Olh.fVisible( true );
Entry = new TabEntry_Object( "Parasitic Extraction" );

// Entry = new TabEntry_Object( "Release Notes" );
// List = new List_Object("doclist", "sort");
// List.fAddItem( "Calibre Release Notes", "calbr_rn"  );
// Entry.fAddList( List );
// IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "User's and Reference Manuals" );
List = new List_Object("doclist", "sort");
List.fAddItem( "Calibre Release Notes", "calbr_rn"  );
List.fAddItem( "Calibre xRC User's Manual", "xrc_user"  );
List.fAddItem( "Calibre xL User's Manual", "calbr_xl_user"  );
List.fAddItem( "xCalibrate Batch User's Manual", "xcalibrat_batch_user" );
List.fAddItem( "Calibre Interactive User's Manual", "calbr_interactive_user"  );
List.fAddItem( "Calibre Interactive (New GUI) User's Manual", "calbr_interactive_n_user"  );
List.fAddItem( "Calibre RVE User's Manual", "calbr_rve_user"  );
List.fAddItem( "Calibre Query Server Manual", "calbr_query_user"  );
List.fAddItem( "Standard Verification Rule Format (SVRF) Manual", "svrf_ur"  );
List.fAddItem( "Calibre Verification User's Manual", "calbr_ver_user" );
List.fAddItem( "PexRC User's Manual", "pexrc_user"  );
List.fAddItem( "Calibre PERC User's Manual", "calbr_perc_user"  );
List.fAddItem( "Calibre xACT User's Manual", "xact_user"  );
//List.fAddItem( "Parasitic Extraction Concepts and Usage Manual", "xrc_cap_resist_gd"  );
//List.fAddItem( "xCalibrate Interactive User's Manual", "xcalibrate_user"  );
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
List.fAddItem( "Calibre Interactive (New GUI) Quick Reference", "calbr_interactive_n_qref", "pdf"  );
List.fAddItem( "Calibre xACT Quick Reference", "xact_qref", "pdf"  );
Entry.fAddList( List );
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
