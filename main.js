$(document).ready(() => {

    //---TESTIMONIAL CYCLING---
    const interval = 6000; 
    let timer;
    const mainAry = ['"[John] was very professional, not rushed, asked appropriate questions, was friendly at the window."', '"Thank you so much for being an amazing commuincator!!!!"', '"A special big thank you to John for being incredibly patient as well..."']
    const subAry = ['Anonymous Customer, White Castle (2020)', 'Anonymous Customer, Instacart (2023)', 'Anonymous Parent, Lavner Education (2023)']

    function startAutoplay() {
        let curIndex = 0
        const quoteElement = $('.quote');
        const subtextElement = $('.subtext');

        quoteElement.html(mainAry[curIndex]).fadeIn('slow');
        subtextElement.html(subAry[curIndex]).fadeIn('slow');

        timer = setInterval(() => {
            curIndex < 2 ? curIndex += 1 : curIndex -= 2
            
            quoteElement.fadeOut('slow', () => {
                quoteElement.html(mainAry[curIndex]).fadeIn('slow');
            });

            subtextElement.fadeOut('slow', () => {
                subtextElement.html(subAry[curIndex]).fadeIn('slow');
            });
        }, interval);
    }

    startAutoplay();
    //------------------------

    //---LOGO LINKS---
    $('#github-logo').on('click', () => {
        window.open('https://github.com/jubalclary')
    })
    $('#linkedin-logo').on('click', () => {
        window.open('https://www.linkedin.com/in/johnclary/')
    })
    $('#resume-icon').on('click', () => {
        window.open('./imgs/JohnClary_Resume.pdf')
    })
    //----------------

    //---NAVBAR LINKS---
    $('#nav-about').on('click', () => {
        window.open('./index.html', '_self')
    })
    $('#nav-education').on('click', () => {
        window.open('./education.html', '_self')
    })
    $('#nav-projects').on('click', () => {
        window.open('./projects.html', '_self')
    })
    //------------------

    // Xavier Text
    $("#xavier-text").click(() => {
        window.open('https://www.xavier.edu/')
    })

    // Xavier Image
    $("#xavier-logo").click(() => {
        window.open('./imgs/Xavier Diploma Cropped.jpg')
    })

    //---CYCLING CERTIFICATES---
    const certInterval = 6000
    let certTimer
    let curCertIndex = 0
    const image = $('#certificate-img')
    const imgsrcs = ["../imgs/certificates/Learn Bootstrap Certificate of Completion-1 (1).png","../imgs/certificates/Learn the Command Line Certificate of Completion-1 (1).png", "../imgs/certificates/Learn CSS Certificate of Completion-1 (1).png", "../imgs/certificates/Learn Git & GitHub Certificate of Completion-1 (1).png", "../imgs/certificates/Learn HTML Certificate of Completion-1 (1).png", "../imgs/certificates/Building Interacitve JavaScript Websites Certificate of Completion-1 (1).png", "../imgs/certificates/Learn Intermediate JavaScript Certificate of Completion-1 (1).png", "../imgs/certificates/Learn JavaScript Certificate of Completion-1 (1).png", "../imgs/certificates/Learn jQuery Certificate of Completion-1 (1).png", "../imgs/certificates/Learn React Certificate of Completion-1 (1).png", "../imgs/certificates/Analyze Data with SQL Certificate of Completion-1.png", "../imgs/certificates/Learn Vue.js Certificate of Completion-1.png"]
    
    function startCertAutoplay () {
        
        

        image.attr("src", imgsrcs[curCertIndex]).fadeIn(400);

        certTimer = setInterval(() => {
            curCertIndex < 11 ? curCertIndex += 1 : curCertIndex -= 11
            
            image.fadeOut(400, () => {
                image.attr("src", imgsrcs[curCertIndex]).fadeIn(400);
            });
        }, certInterval);
    }

    startCertAutoplay()

    // Hover over the buttons to display certificate of choice

    $("#BS-button").click(() => {
        clearInterval(certTimer)
        curCertIndex = 0
        startCertAutoplay()
    })

    $("#CL-button").click(() => {
        clearInterval(certTimer)
        curCertIndex = 1
        startCertAutoplay()
    })

    $("#CSS-button").click(() => {
        clearInterval(certTimer)
        curCertIndex = 2
        startCertAutoplay()
    })

    $("#GGH-button").click(() => {
        clearInterval(certTimer)
        curCertIndex = 3
        startCertAutoplay()
    })

    $("#HTML-button").click(() => {
        clearInterval(certTimer)
        curCertIndex = 4
        startCertAutoplay()
    })

    $("#IJW-button").click(() => {
        clearInterval(certTimer)
        curCertIndex = 5
        startCertAutoplay()
    })

    $("#IJS-button").click(() => {
        clearInterval(certTimer)
        curCertIndex = 6
        startCertAutoplay()
    })

    $("#JS-button").click(() => {
        clearInterval(certTimer)
        curCertIndex = 7
        startCertAutoplay()
    })

    $("#JQ-button").click(() => {
        clearInterval(certTimer)
        curCertIndex = 8
        startCertAutoplay()
    })

    $("#R-button").click(() => {
        clearInterval(certTimer)
        curCertIndex = 9
        startCertAutoplay()
    })

    $("#SQL-button").click(() => {
        clearInterval(certTimer)
        curCertIndex = 10
        startCertAutoplay()
    })

    $("#VUE-button").click(() => {
        clearInterval(certTimer)
        curCertIndex = 11
        startCertAutoplay()
    })
    //--------------------------

    //---PROJECT CARDS---

    $('#studio-project-card').click(() => {
        window.open('./studio_project.html', '_self')
    })

    $('#tournament-maker-card').click(() => {
        window.open('./tournament_maker.html', '_self')
    })

    $('#other-projects').click(() => {
        window.open('https://github.com/jubalclary')
    })

        // Cycling studio images
        const studioInterval = 5000
        let studioTimer
        let curStudioIndex = 0
        const studioImage = $('#studio-pic')
        const studioImgSrcs = ['./imgs/jojj-pic-2.png', './imgs/group pic.jpg', './imgs/jojj-pic-1.png']

        function startStudioAutoplay () {
            
            studioImage.attr("src", studioImgSrcs[curStudioIndex]).fadeIn(400);
    
            studioTimer = setInterval(() => {
                curStudioIndex < 2 ? curStudioIndex += 1 : curStudioIndex -= 2
                
                studioImage.fadeOut(400, () => {
                    studioImage.attr("src", studioImgSrcs[curStudioIndex]).fadeIn(400);
                });
            }, studioInterval);
        }
    
        startStudioAutoplay()

        // Cycling tournament maker images
        const tournamentInterval = 5000
        let tournamentTimer
        let curTournamentIndex = 0
        const tournamentImage = $('#tournament-maker-pic')
        const tournamentImgSrcs = ['./imgs/tournament-maker-pic-1.png', './imgs/tournament-maker-pic.png', './imgs/tournament-maker-pic-2.png']

        function startTournamentAutoplay () {
            
            tournamentImage.attr("src", tournamentImgSrcs[curTournamentIndex]).fadeIn(400);
    
            tournamentTimer = setInterval(() => {
                curTournamentIndex < 2 ? curTournamentIndex += 1 : curTournamentIndex -= 2
                
                tournamentImage.fadeOut(400, () => {
                    tournamentImage.attr("src", tournamentImgSrcs[curTournamentIndex]).fadeIn(400);
                });
            }, tournamentInterval);
        }
    
        startTournamentAutoplay()

    //-------------------


})