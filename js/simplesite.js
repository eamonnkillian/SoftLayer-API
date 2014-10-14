$(document).ready(function() {

    function resizeMySite() {

        // 
        // Lets get the window height and width attributes
        //

        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var windowArea = windowWidth * windowHeight;

        //
        // Probably an opportune moment to deal with font sizes ... In case anyone  
        // wonders why all the immediate if statements ... Look at (link below) 
        // StackOverflow and kudos with thanks to "Some" for benchmarking this ... 
        // turns out there is a 30ms overhead to using the switch-range so I've gone 
        // with immediate if's instead ... 
        // 
        // http://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than
        // 

        var fontSize = '10px';
        if (windowArea < 99999) {
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 100000 && windowArea < 249999) {
            fontSize = '12px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 250000 && windowArea < 383999) {
            fontSize = '14px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 384000 && windowArea < 467999) {
            fontSize = '16px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 468000 && windowArea < 537599) {
            fontSize = '18px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 537600 && windowArea < 614399) {
            fontSize = '20px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 614400 && windowArea < 691199) {
            fontSize = '22px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 691200 && windowArea < 786431) {
            fontSize = '24px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 786432) {
            fontSize = '24px';
            $('body').css('font-size', '24px');
        }

        // 
        // Our Body is 100% of the width but it has a margin of
        // 5% so lets remove the margin in our CSS file and add 
        // it here explicitly ... lets also be aware of the need
        // to have no margin if someone has a really wide screen
        // and makes their browser full width and short!
        //

        var bodyMargin = windowWidth * .05;
        if (windowWidth > 1000 && windowHeight < 400) {
            bodyMargin = 0;
        } else if (windowWidth < 470) {
            bodyMargin = 0;
        }
        $('body').css('margin', bodyMargin);

        //
        // This leaves us with a new maximum width for the 
        // mainContainer of the total width minus the margins
        // either side and top and bottom ...
        // 

        var mainContainerWidth = windowWidth - (2 * bodyMargin);
        var mainContainerHeight = windowHeight - (2 * bodyMargin);
        $('.mainContainer').css('width', mainContainerWidth);
        $('.mainContainer').css('height', mainContainerHeight);

        //
        // Lets work from the top ... with heights as follows:
        //     - Heading Section 2/10ths 
        //     - Menu 1/10th
        //     - Main view 6/10ths
        //     - Footer 1/10th
        // 
        // the top of the window contains the strapline and the 
        // banner
        //

        var mainheadingHeight = mainContainerHeight * .2;
        $('.mainHeader').css('height', mainheadingHeight);
        $('.mainHeader').css('width', mainContainerWidth);

        // 
        // Now lets deal with the logo size .. we want it to be 
        // about 10% of the height of the window and its width to be 
        // 3 times its height ...
        //

        var logoHeight = mainheadingHeight * .4;
        var logoWidth = logoHeight;
        $('.logoImage').css('width', logoWidth);
        $('.logoImage').css('height', logoHeight);

        //
        // Now the logo margins or padding ...
        //

        $('.logoImage').css('margin-top', (mainheadingHeight - logoHeight) / 2);
        $('.logoImage').css('margin-right', mainContainerWidth * 0.05);

        //
        // Now lets do the Strapline ... lets do this 
        // with even more precision than we used to center the 
        // logo image ...
        //

        var straplineHeight = $('.mainTitle').height();
        $('.mainTitle').css('margin-top', (mainheadingHeight - straplineHeight) / 2);
        $('.mainTitle').css('margin-left', mainContainerWidth * 0.05);
        $('.mainTitle').css('font-size', '1.2em');
        $('.mainTitle').css('font-weight', '700');

        //
        // The menu bar should be about one tenth the height of the 
        // window when the size is up to 768 pixels and then remain 
        // fixed or it looks a bit ridiculous ...
        // 

        var mainmenuHeight = mainContainerHeight * .1;
        if (mainmenuHeight > 60) {
            mainmenuHeight = 60;
        }
        $('.mainMenu').css('height', mainmenuHeight);
        $('.mainMenu').css('width', mainContainerWidth);

        //
        // Now the centering of the menu items in the menu  ...
        // And adding a left padding ... 
        //

        var menuitemHeight = $('.menuItem').height();
        $('.menuItem').css('margin-top', (mainmenuHeight - menuitemHeight) / 2);
        $('.menuItem').css('padding-left', mainContainerWidth * 0.05);

        // 
        // What about the main view ... its too small and I'd like 
        // this to be about six tenths of the height of the window ..
        // I'd also like a nice padding around the text to differentiate it ..
        //


        var mainviewHeight = mainContainerHeight * .6;
        var mainviewPadding = mainviewHeight * 0.05;
        $('.mainView').css('height', mainviewHeight - (2 * mainviewPadding));
        $('.mainView').css('width', mainContainerWidth - (2 * mainviewPadding));

        //
        // Add a padding to the main view
        //

        $('.mainView').css('padding', mainviewPadding);


        //
        // The footer should be 1/10th of the size of the mainContainer
        //

        var mainfooterHeight = mainContainerHeight * .1;
        $('.mainFooter').css('height', mainfooterHeight);
        $('.mainFooter').css('width', mainContainerWidth);

        //
        // Lets center the spans in the footer ...
        //

        var copyrightHeight = $('.mainCopyright').height();
        $('.mainCopyright').css('margin-top', (mainfooterHeight - copyrightHeight) / 2);
        $('.mainCopyright').css('margin-left', mainContainerWidth * 0.05);

        var contactinfoHeight = $('.mainContactInfo').height();
        $('.mainContactInfo').css('margin-top', (mainfooterHeight - contactinfoHeight) / 2);
        $('.mainContactInfo').css('margin-right', mainContainerWidth * 0.05);

    }

    //
    // Call the sizing function once the document is loaded ..
    // 

    resizeMySite();

    //
    // Call the sizing function if the window is ever re-sized!!! ..
    // 

    $(window).resize(function() {
        resizeMySite();
    });

    $('#checkAccount').click(function() {
        var url = $(this).attr('action');
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            success: function(response) {
                $('#results').append(response);
            }, error: function(jqXHR, textStatus, errorThrown) {
                $('#results').append(response);
                alert("error...soz!");
            }
        });
        return false;
    });
    
    $('#checkUsers').click(function() {
        var url = $(this).attr('action');
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            success: function(response) {
                $('#results').append(response);
            }, error: function(jqXHR, textStatus, errorThrown) {
                $('#results').append(response);
                alert("error...soz!");
            }
        });
        return false;
    });
    
    $('#checkHardware').click(function() {
        var url = $(this).attr('action');
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            success: function(response) {
                $('#results').append(response);
            }, error: function(jqXHR, textStatus, errorThrown) {
                $('#results').append(response);
                alert("error...soz!");
            }
        });
        return false;
    });

});
