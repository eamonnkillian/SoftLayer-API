<!DOCTYPE html>
<!--

   Created originally on : 01-07-2014
   Modifications on : 12-09-2014

   Company     : SaaSify Ltd.
   Author      : Eamonn Killian
   Web         : www.eamonnkillian.com
   Contact     : eamonnkillian@gmail.com

-->
<html>
    <head>
        <meta charset="UTF-8">
        <link rel='stylesheet' href='css/simplesite.css' />
        <script type='text/javascript' src='js/jquery.min.2-1-0.js'></script>
        <script type="text/javascript" src="js/simplesite.js"></script>
        <title>Simple site layout - The HTML</title>
    </head>
    <body>
        <!-- Lets first define the total container -->
        <div class="mainContainer">
            <!-- First up in the container is the heading section -->
            <div class="mainHeader">
                <!-- The title for the site -->
                <span class="mainTitle">My White Labelled SoftLayer Portal</span>
                <!-- The Logo for the simple site -->
                <img class="logoImage" src="img/white-internet.png" />    
            </div>
            <!-- Next up the menu area -->
            <div class="mainMenu">

                <nav>
                    <ul>
                        <li class='menuItem'>
                            <form id="checkAccount" method="post" action="getAccountInfo.php">
                                <input type='submit' class="submitButton" value='Show Account'/>
                            </form>
                        </li>
                        <li>
                            <form id="checkUsers" method="post" action="getUsersInfo.php">
                                <input type='submit' class="submitButton" value='Show Users'/>
                            </form>
                        </li>
                        <li>
                            <form id="checkHardware" method="post" action="getHardwareInfo.php">
                                <input type='submit' class="submitButton" value='Show Virtual Machines'/>
                            </form>
                        </li>
                        <li>
                            <form id="makeHardware" method="post" action="makeMachine.php">
                                <input type='submit' class="submitButton" value='Make Virtual Machine'/>
                            </form>
                        </li>
                    </ul>
                    
                </nav>
                </form>
            </div>
            <!-- Next the viewing area -->
            <div class="mainView">
                <p id="results"></p>
            </div>
            <!-- Finally the footer section -->
            <div class="mainFooter">
                <!-- The copyright information -->
                <span class="mainCopyright">&#169; 2014</span>
                <!-- The contact information -->
                <span class="mainContactInfo">Contact: EJK<br/>
                <a href="#" onClick="parent.location = 'mailto:eamonnkillian@gmail.com?subject=Getting in touch...'"><strong>eamonnkillian@gmail.com</strong></a></span>
            </div>
        </div>
    </body>
</html>