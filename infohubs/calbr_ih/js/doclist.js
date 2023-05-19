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
var mInfoHub = "calbr_ih";
var mProductList = "all Calibre products.";

var Entry;
var List;

SetDefaultListSize(12);

// Online Help & Manuals
IHTab_Olh.fVisible( true );

Entry = new TabEntry_Object( "Release Notes" );
List = new List_Object("doclist", "sort");
List.fAddItem( "Calibre Release Notes", "calbr_rn"  );
List.fAddItem( "Calibre Release Highlights", "calibre_2021_2_18_rh"  );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Install &amp; Licensing" );
List = new List_Object("doclist", "sort");
List.fAddItem( "Calibre Administrator's Guide", "calbr_admin_gd"  );
List.fAddItem( "FLEXnet License Administration Guide", "flexnet_lic_admin", "pdf" );
List.fAddItem( "Licensing Mentor Graphics Software", "mgc_licen", "pdf" );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Release Documents on Support Center" );
Entry.fAddLink( "View latest release documents", "release_docs", "View the newest release notes, release highlights, corrected defects, known issues, "
	+ "installation, and licensing documents. On the Downloads page, select the Release Documentation tab." );
Entry.fAddLink( "Access Calibre Platform Support Overview and Roadmap", "roadmap"  );
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Calibre Tutorials and Example Kits (eKits) on Support Center" );
Entry.fSetBodyText( "Tutorials and example kits contain design data, rule files, and instructions for running and learning more about the tool."  );
Entry.fAddLink( "Try It! Calibre Tutorials and Example Kits", "cal_docs_gsguide", "Click the link to go to the Support Center listing of eKits, "
								     + "or see the Training tab for download instructions." );
IHTab_Olh.fAddEntry( Entry );

// Training
IHTab_Training.fVisible( true );
Entry = new TabEntry_Object( "Tutorials and Example Kits (eKits)" );
Entry.fSetBodyText( "Tutorials and eKits contain design data, rule files, and instructions for running and learning more about the tool."  );
Entry.fAddLink( "Try It! Calibre Tutorials and eKits", "cal_docs_gsguide", "Click the link to go to the Support Center listing of eKits, or follow these instructions:<br> "
						 + "1. On Support Center, select the Documentation tab. <br>" 
						 + "2. Under Document Types, select Getting Started Guide. <br>" 
					     + "4. Click the link for eKit you want to download.<br>"
						 + "To download an eKit for an earlier release, choose the release in the \"Restrict content to version\" dropdown list." );
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
