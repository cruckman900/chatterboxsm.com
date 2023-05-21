import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import Card from "../../UI/Card/Card";
import classes from './newFeatures.module.css';
import wClasses from "../../builders/widget.module.css";

export default function NewFeatures() {
    return (
        <DefaultPage headerText="Features & Updates Log">
            <Card headerText="May 2023">
                <BodyHeader>5/21/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Created mock data for the chat rooms and added switch functionality to switch the display - lots of work.  I now have 2 contexts, 1 
                    for authorization and 1 for navigating the chat channels.  Created tiles for the chat channels and loading them in their proper place.
                </div>
                <BodyHeader>5/20/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Modified Note component to now be used for Info, Success, Warning, and Error messages.  Broke down UserInfo forms into array maps and 
                    created labledInputs.js to return all types of Inputs already formatted.  Gave collapsable cards a '+/-' indicator.  Added more fields to 
                    AccountInfo.  Modified form styles.  Clicking on labels in forms selects the associated input.  Hovering over inputs or their labels
                    makes a border around it, changes the cursor, and underlines the label.  Disable pertinent account info after user is created.  Alphabetized 
                    checkbox lists in User Information forms.  Some simple form validations on the Account Info form, including locking down pertinant info and 
                    disabling the submit button on successful activation of the account (mocked).
                </div>
                <BodyHeader>5/18/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Updated React version.  Broke User Info form into tabbed sections - Hiding Location if user is under 18.  Added Privacy Policy and Terms 
                    of Use stubs and show links in the footer which open the pages inside of a Modal.  Added StatusBar.  Major update to styles.
                </div>
                <BodyHeader>5/17/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Changed Login/Logout from a full page screen to a newly added Modal component.  Changed letter spacings.  Added a prop to Card for isOpened.
                </div>
                <BodyHeader>5/01/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Implemented a context for login.  Hiding and showing elements based on login status.  Changing Login menu link to Log Out once user is logged in.
                    Still need to work on database connectivity and api calls, but all in due time.  Changed animation on Portrait mode to include brightness/contrast.
                    Added onChange handler for Age in UserSettings.js.
                </div>
            </Card>
            <hr className={wClasses.br} />
            <Card headerText="April 2023">
                <BodyHeader>4/24/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Massive styles overhaul: font spacing, color, sizing.  Created a top navigation bar.  Added all pages belonging to the navigation system.  
                    Completed the inputs for the User Settings page.  Making DefaultPage body content the scrollable element on the screen inside the Main section.
                    This will accomodate smaller devices better so that headings stay on top, the bottom is clearly visible without scrolling, and the content is kept
                    inside the container.
                </div>
                <BodyHeader>4/23/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Changed the background color for Card and Default Page to a black color.  Added CommunitySettings stub.  Added bgcolor for inputs - normal,
                    focused, valid, and error states.
                </div>
                <BodyHeader>4/22/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Added an accordion view on the right for friends, groups and communities.  Can't get the accordion to work properly yet.  Changed from
                    accordion to my own card component.
                </div>
                <BodyHeader>4/20/2023 (just 'cuz it's 4/20?)</BodyHeader>
                <div className={classes.updateBody}>
                    Added a cheap looking logo and navigation buttons on the left side are now hilighting when active.  Beginning to work 
                    on the User Settings section of the site.  I'm not wiring them up to any kind of service or implementing any kind of
                    handling for the inputs &mdash; Just Layout!
                </div>
                <BodyHeader>4/17/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Not very many features here yet.  I am in the process of creating a skeleton of features that will currently not be connected to any kind of 
                    backend service.  So, while I am building, you will be able to see what things will look like when it is all finished, you just won't be 
                    able to interact with any live functionality.
                </div>
            </Card>
        </DefaultPage>
    );
}