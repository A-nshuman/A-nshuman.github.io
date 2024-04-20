document.addEventListener('DOMContentLoaded', () => {

    // Definations
    const webBrowser = document.getElementById('webBrowser');
    const chrome = document.querySelectorAll('#crm');
    const portfolio = document.getElementById('portfolio');
    const newTabBtn = document.getElementById('openInNewTab');

    const fileExpAddressBarText = document.getElementById('fileExpAddressBarText');
    const fileExpAddressBarImg = document.getElementById('fileExpAddressBarImg');
    const fileExp = document.getElementById('fileExp');
    const imgApp = document.getElementById('imgApp');
    const vidApp = document.getElementById('vidApp');

    const webCloseBtn = document.getElementById('webCloseBtn');
    const expCloseBtn = document.getElementById('expCloseBtn');
    const imgCloseBtn = document.getElementById('imgCloseBtn');
    const vidCloseBtn = document.getElementById('vidCloseBtn');

    const projFolder = document.getElementById('projFolder');
    const b_imgIcon = document.getElementById('b_imgIcon');
    const b_vidIcon = document.getElementById('b_vidIcon');
    const certiIcon = document.getElementById('certiIcon');
    const photoGIcon = document.getElementById('photoGIcon');
    const photoSIcon = document.getElementById('photoSIcon');

    const fileExpHead = document.getElementById('heads');
    const projFiles = document.querySelector('.projFiles');
    const blenderVideos = document.getElementById('blenderVideos');
    const blenderImages = document.getElementById('blenderImages');
    const certisFiles = document.getElementById('certis');
    const photoSFiles = document.getElementById('photoS');
    const photoGFiles = document.getElementById('photoG');

    const sidebarProj = document.getElementById('sidebarProj');
    const sidebarBlenderVid = document.getElementById('sidebarBlenderVid');
    const sidebarBlenderImg = document.getElementById('sidebarBlenderImg');
    const sidebarPhotoshop = document.getElementById('sidebarPhotoshop');
    const sidebarPhotography = document.getElementById('sidebarPhotography');
    const sidebarCetificates = document.getElementById('sidebarCetificates');

    const tabName = document.getElementById('tabName');
    const tabLogo = document.getElementById('tabLogo');
    const frame = document.getElementById('frame');
    const url = document.getElementById('url');

    const git = document.querySelectorAll('#git');
    const ttr = document.querySelectorAll('#ttr');
    const igm = document.querySelectorAll('#igm');
    const lin = document.querySelectorAll('#lin');
    const spo = document.querySelectorAll('#spo');

    // Projects
    const khojbox = document.getElementById('liKhoj');
    const calculator = document.getElementById('liCalc');
    const bmicalc = document.getElementById('liBMICalc');
    const Ptable = document.getElementById('liPt');
    const Currency = document.getElementById('liCurCvt');
    const tempConvert = document.getElementById('liTempCon');
    const samaysathi = document.getElementById('liSamay');
    const timerExt = document.getElementById('liTimer');
    const timerWeb = document.getElementById('liTimerWeb');
    const musicplayer = document.getElementById('liMusic');
    const whatsappSpam = document.getElementById('liSpam');
    const randomSearch = document.getElementById('liRandom');
    const pinGen = document.getElementById('liPin');
    const aashirvaad = document.getElementById('liAashirvaad');
    const anshuBot = document.getElementById('liBot');
    const carGame = document.getElementById('liCar');
    const infCube = document.getElementById('liInfinity');
    const FPSgame = document.getElementById('liFPS');

    const abtMe = document.getElementById('aboutMeNotePad');
    const abtMeIcon = document.getElementById('aboutMeIcon');
    const abtCloseBtn = document.getElementById('abtCloseBtn');

    const b_videos = document.querySelectorAll('.video video');
    const b_images = document.querySelectorAll('#blenderImages img');
    const certi_img = document.querySelectorAll('#certis img');
    const photoS_img = document.querySelectorAll('#photoS img');
    const photoG_img = document.querySelectorAll('#photoG img');

    const nextImg = document.getElementById('fwd');
    const backImg = document.getElementById('bck');
    const nextVid = document.getElementById('vid_fwd');
    const backVid = document.getElementById('vid_bck');

    // Time definations
    const footerTime = document.getElementById('ftime');
    const footerDate = document.getElementById('fdate');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const twelveHour = hours % 12 || 12;
    const date = currentTime.toLocaleDateString('en-IN');

    // Start Menu definations
    const winBtn = document.getElementById('win');
    const startMenu = document.getElementById('start');
    const trayApps = document.getElementById('trayApps');
    const trayIcon = document.getElementById('trayIcon');
    const trayIconInt = document.getElementById('trayIconInt');

    const rightClickMenu = document.getElementById('rightClickMenu');
    const desktop = document.getElementById('desktop');

    //Functions
    function displayTime() {
        footerTime.innerHTML = `${twelveHour}:${minutes} ${ampm}`;
        footerDate.innerText = date;
    }

    function showElements(...elements) {
        elements.forEach(element => {
            element.style.display = 'flex';
        });
    }

    function hideElements(...elements) {
        elements.forEach(element => {
            element.style.display = 'none';
        });
    }

    function appOpen(appName) {
        appName.style.animation = 'openWindow 0.2s linear';
        appName.style.display = 'flex';
    }

    function appClose(appName) {
        appName.style.animation = 'closeWindow 0.2s linear'
        appName.addEventListener('animationend', () => {
            if (event.animationName === 'closeWindow') {
                appName.style.display = 'none';
            }
        });
    }

    function gitOpen(repoName) {
        window.open(`https://github.com/A-nshuman/${repoName}`, '_blank')
    }
    
    function gitOpenRM(repoName) {
        window.open(`https://github.com/A-nshuman/${repoName}#readme`, '_blank')
    }


    let newTabURL = '';
    newTabBtn.addEventListener('click', () => {
        if (newTabURL) {
            window.open(newTabURL, '_blank');
        }
    });

    function newTabOpen(link) {
        newTabURL = link;
    }

    // Date and Time Start
    setInterval(displayTime, 1000);
    displayTime();
    // Date and Time End

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault()
    });

    desktop.addEventListener('contextmenu', (e) => {

        rightClickMenu.style.left = `${e.clientX}px`;
        rightClickMenu.style.top = `${e.clientY}px`;

        rightClickMenu.style.display = 'block'
        rightClickMenu.style.position = 'absolute'
    });

    desktop.addEventListener('click', () => {
        rightClickMenu.style.display = 'none'
    });

    // Web Browser Start
    webCloseBtn.addEventListener('click', () => {
        webBrowser.style.animation = 'closeWindow 0.2s linear'
        webBrowser.addEventListener('animationend', () => {
            if (event.animationName === 'closeWindow') {
                webBrowser.style.display = 'none';
            }
        });
    });

    // WebPages Management
    chrome.forEach((div) => {
        div.addEventListener('click', () => {
            tabName.innerHTML = 'खोजBOX'
            tabLogo.src = 'images/khojBoxLogo.png'
            frame.src = 'https://khoj-box.netlify.app'
            url.innerHTML = 'https://khoj-box.netlify.app'
            appOpen(webBrowser)
            newTabOpen('https://khoj-box.netlify.app')
        });
    });

    git.forEach((div) => {
        div.addEventListener('click', () => {
            window.open('https://github.com/A-nshuman', '_blank')
        });
    });

    ttr.forEach((div) => {
        div.addEventListener('click', () => {
            window.open('https://twitter.com/A_nshuman', '_blank')
        });
    });

    igm.forEach((div) => {
        div.addEventListener('click', () => {
            window.open('https://www.instagram.com/Anshu_man_man/', '_blank')
        });
    });

    lin.forEach((div) => {
        div.addEventListener('click', () => {
            window.open('https://www.linkedin.com/in/anshuman-bhardwaj-89476b23b/', '_blank')
        });
    });

    spo.forEach((div) => {
        div.addEventListener('click', () => {
            window.open('https://open.spotify.com/user/76eq1lpy63rym8lhgnmlz8ic8', '_blank')
        });
    });
    // Web Browser End

    // About Me Start
    abtMeIcon.addEventListener('click', () => {
        abtMe.style.animation = 'openWindow 0.2s linear';
        abtMe.style.display = 'flex';
    });

    abtCloseBtn.addEventListener('click', () => {
        abtMe.style.animation = 'closeWindow 0.2s linear';
        abtMe.addEventListener('animationend', () => {
            if (event.animationName === 'closeWindow') {
                abtMe.style.display = 'none';
            }
        });
    });
    // About Me End

    // File Explorer Start
    expCloseBtn.addEventListener('click', () => {
        appClose(fileExp)
    });

    // let selectedDiv = null;

    // projList.forEach((div) => {
    //     div.addEventListener('click', () => {
    //         if (selectedDiv === div) {
    //             div.style.backgroundColor = '';
    //             selectedDiv = null;
    //         } else {
    //             if (selectedDiv) {
    //                 selectedDiv.style.backgroundColor = '';
    //             }
    //         }
    //         div.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    //         selectedDiv = div;
    //     });
    // });

    aashirvaad.addEventListener('click', () => {
        tabName.innerHTML = 'Aashirvaad Bank'
        tabLogo.src = 'images/AB logo bigger.png'
        frame.src = 'https://aashirvaad-bank.netlify.app/'
        url.innerHTML = 'https://aashirvaad-bank.netlify.app/'
        appOpen(webBrowser)
        appClose(fileExp)
        newTabOpen('https://aashirvaad-bank.netlify.app/')
    });

    samaysathi.addEventListener('click', () => {
        tabName.innerHTML = 'Samay Sathi'
        tabLogo.src = 'images/document.png'
        frame.src = 'https://samaysathi.netlify.app/'
        url.innerHTML = 'https://samaysathi.netlify.app/'
        appOpen(webBrowser)
        appClose(fileExp)
        newTabOpen('https://samaysathi.netlify.app/')
    });

    calculator.addEventListener('click', () => {
        tabName.innerHTML = 'Calculator'
        tabLogo.src = 'images/calcLogo.png'
        frame.src = 'https://acalc.netlify.app/'
        url.innerHTML = 'https://acalc.netlify.app/'
        appOpen(webBrowser)
        appClose(fileExp)
        newTabOpen('https://acalc.netlify.app/')
    });

    bmicalc.addEventListener('click', () => {
        tabName.innerHTML = 'BMI Calculator'
        tabLogo.src = 'images/BMI.png'
        frame.src = 'https://abmicalc.netlify.app/'
        url.innerHTML = 'https://abmicalc.netlify.app/'
        appOpen(webBrowser)
        appClose(fileExp)
        newTabOpen('https://abmicalc.netlify.app/')
    });

    Ptable.addEventListener('click', () => {
        tabName.innerHTML = 'Periodic Table'
        tabLogo.src = 'images/Periodic.png'
        frame.src = 'https://aptable.netlify.app'
        url.innerHTML = 'https://aptable.netlify.app/'
        appOpen(webBrowser)
        appClose(fileExp)
        newTabOpen('https://aptable.netlify.app/')
    });

    Currency.addEventListener('click', () => {
        tabName.innerHTML = 'Currency Converter'
        tabLogo.src = 'images/Currency.png'
        frame.src = 'https://a-currency.netlify.app/'
        url.innerHTML = 'https://a-currency.netlify.app/'
        appOpen(webBrowser)
        appClose(fileExp)
        newTabOpen('https://a-currency.netlify.app/')
    });
    
    tempConvert.addEventListener('click', () => {
        tabName.innerHTML = 'Temperature Converter'
        tabLogo.src = 'images/tempLogo.png'
        frame.src = 'https://convert-a-temp.netlify.app/'
        url.innerHTML = 'https://convert-a-temp.netlify.app/'
        appOpen(webBrowser)
        appClose(fileExp)
        newTabOpen('https://convert-a-temp.netlify.app/')
    });
    
    timerWeb.addEventListener('click', () => {
        tabName.innerHTML = 'Timer'
        tabLogo.src = 'images/document.png'
        frame.src = 'https://a-timer.netlify.app/'
        url.innerHTML = 'https://a-timer.netlify.app/'
        appOpen(webBrowser)
        appClose(fileExp)
        newTabOpen('https://a-timer.netlify.app/')
    });

    musicplayer.addEventListener('click', () => {
        tabName.innerHTML = 'Music Player'
        tabLogo.src = 'images/document.png'
        frame.src = 'https://anshu-music-player.netlify.app/'
        url.innerHTML = 'https://anshu-music-player.netlify.app/'
        appOpen(webBrowser)
        appClose(fileExp)
        newTabOpen('https://anshu-music-player.netlify.app/')
    });

    khojbox.addEventListener('click', () => {
        tabName.innerHTML = 'खोजBOX'
        tabLogo.src = 'images/khojBoxLogo.png'
        frame.src = 'https://khoj-box.netlify.app'
        url.innerHTML = 'https://khoj-box.netlify.app'
        appOpen(webBrowser)
        appClose(fileExp)
        newTabOpen('https://khoj-box.netlify.app')
    });

    timerExt.addEventListener('click', () => {
        gitOpenRM('Timer-extension')
    });

    whatsappSpam.addEventListener('click', () => {
        gitOpenRM('whatsapp_spam_bot')
    });   

    randomSearch.addEventListener('click', () => {
        gitOpenRM('random_search')
    });   

    pinGen.addEventListener('click', () => {
        gitOpenRM('pin_guesser')
    });   

    anshuBot.addEventListener('click', () => {
        gitOpen('AnshuBot')
    });   

    carGame.addEventListener('click', () => {
        gitOpen('Car-game')
    });   

    infCube.addEventListener('click', () => {
        gitOpen('Infinity-cube-game')
    });   

    FPSgame.addEventListener('click', () => {
        gitOpen('FPS-game-trial')
    });   

    portfolio.addEventListener('click', () => {
        tabName.innerHTML = 'Portfolio'
        tabLogo.src = 'images/portfolio.png'
        frame.src = 'https://anshumans-portfolio.netlify.app'
        url.innerHTML = 'https://anshumans-portfolio.netlify.app'
        appOpen(webBrowser)
        appClose(fileExp)
        newTabOpen('https://anshumans-portfolio.netlify.app')
    });
    // File Explorer End

    // Image/Video App Start
    imgCloseBtn.addEventListener('click', () => {
        appClose(imgApp)
    });

    vidCloseBtn.addEventListener('click', () => {
        appClose(vidApp);
    });

    var currentImgIndexBlenderImg = 0;
    var currentImgIndexBlenderVid = 0;
    var currentImgIndexPhotoS = 0;
    var currentImgIndexPhotoG = 0;
    var currentImgIndexCerti = 0;

    const imgContainerBlenderImg = document.querySelector('#imgContainerBlenderImg img');
    const imgContainerCertiImg = document.querySelector('#imgContainerCerti img');
    const imgContainerPhotoSImg = document.querySelector('#imgContainerPhotoS img');
    const imgContainerPhotoGImg = document.querySelector('#imgContainerPhotoG img');

    const imgContainerBlender = document.getElementById('imgContainerBlenderImg');
    const imgContainerCerti = document.getElementById('imgContainerCerti');
    const imgContainerPhotoS = document.getElementById('imgContainerPhotoS');
    const imgContainerPhotoG = document.getElementById('imgContainerPhotoG');

    const vidContainer = document.querySelector('#vidContainerBlenderVid video');

    b_videos.forEach((video, index) => {
        video.addEventListener('click', () => {
            appOpen(vidApp);

            vidContainer.src = video.getAttribute('src');
            currentImgIndexBlenderVid = index;
        });
    });

    b_images.forEach((img, index) => {
        img.addEventListener('click', () => {
            appOpen(imgApp);

            showElements(imgContainerBlender);
            hideElements(imgContainerCerti, imgContainerPhotoS, imgContainerPhotoG);

            imgContainerBlenderImg.src = img.getAttribute('src');
            currentImgIndexBlenderImg = index;
        });
    });

    certi_img.forEach((img, index) => {
        img.addEventListener('click', () => {
            appOpen(imgApp);

            showElements(imgContainerCerti);
            hideElements(imgContainerBlender, imgContainerPhotoS, imgContainerPhotoG);

            imgContainerCertiImg.src = img.getAttribute('src');
            currentImgIndexCerti = index;
        });
    });

    photoS_img.forEach((img, index) => {
        img.addEventListener('click', () => {
            appOpen(imgApp);

            showElements(imgContainerPhotoS);
            hideElements(imgContainerCerti, imgContainerBlender, imgContainerPhotoG);

            imgContainerPhotoSImg.src = img.getAttribute('src');
            currentImgIndexPhotoG = index;
        });
    });

    photoG_img.forEach((img, index) => {
        img.addEventListener('click', () => {
            appOpen(imgApp);

            showElements(imgContainerPhotoG);
            hideElements(imgContainerBlender, imgContainerPhotoS, imgContainerCerti);

            imgContainerPhotoGImg.src = img.getAttribute('src');
            currentImgIndexPhotoG = index;
        });
    });

    nextVid.addEventListener('click', () => {
        currentImgIndexBlenderVid = (currentImgIndexBlenderVid + 1) % b_videos.length;
        vidContainer.src = b_videos[currentImgIndexBlenderVid].getAttribute('src');
    });
    backVid.addEventListener('click', () => {
        currentImgIndexBlenderVid = (currentImgIndexBlenderVid - 1 + b_videos.length) % b_videos.length;
        vidContainer.src = b_videos[currentImgIndexBlenderVid].getAttribute('src');
    });

    nextImg.addEventListener('click', () => {
        currentImgIndexBlenderImg = (currentImgIndexBlenderImg + 1) % b_images.length;
        imgContainerBlenderImg.src = b_images[currentImgIndexBlenderImg].getAttribute('src');

        currentImgIndexCerti = (currentImgIndexCerti + 1) % certi_img.length;
        imgContainerCertiImg.src = certi_img[currentImgIndexCerti].getAttribute('src');

        currentImgIndexPhotoG = (currentImgIndexPhotoG + 1) % photoG_img.length;
        imgContainerPhotoGImg.src = photoG_img[currentImgIndexCerti].getAttribute('src');

        currentImgIndexPhotoS = (currentImgIndexPhotoS + 1) % photoS_img.length;
        imgContainerPhotoSImg.src = photoS_img[currentImgIndexPhotoS].getAttribute('src');
    });

    backImg.addEventListener('click', () => {
        currentImgIndexBlenderImg = (currentImgIndexBlenderImg - 1 + b_images.length) % b_images.length;
        imgContainerBlenderImg.src = b_images[currentImgIndexBlenderImg].getAttribute('src');

        currentImgIndexCerti = (currentImgIndexCerti - 1 + certi_img.length) % certi_img.length;
        imgContainerCertiImg.src = certi_img[currentImgIndexCerti].getAttribute('src');

        currentImgIndexPhotoG = (currentImgIndexPhotoG - 1 + photoG_img.length) % photoG_img.length;
        imgContainerPhotoGImg.src = photoG_img[currentImgIndexPhotoG].getAttribute('src');

        currentImgIndexPhotoS = (currentImgIndexPhotoS - 1 + photoS_img.length) % photoS_img.length;
        imgContainerPhotoSImg.src = photoS_img[currentImgIndexPhotoS].getAttribute('src');
    });

    // Image App End

    // KeyUp Start
    document.addEventListener('keyup', (event) => {
        if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {

            startMenu.style.display = 'none';
            rightClickMenu.style.display = 'none'

        }

        else if (event.key === 'ArrowRight' || event.keyCode === 39) {

            currentImgIndexBlenderImg = (currentImgIndexBlenderImg + 1) % b_images.length;
            imgContainerBlenderImg.src = b_images[currentImgIndexBlenderImg].getAttribute('src');

            currentImgIndexCerti = (currentImgIndexCerti + 1) % certi_img.length;
            imgContainerCertiImg.src = certi_img[currentImgIndexCerti].getAttribute('src');

            currentImgIndexPhotoG = (currentImgIndexPhotoG + 1) % photoG_img.length;
            imgContainerPhotoGImg.src = photoG_img[currentImgIndexCerti].getAttribute('src');

            currentImgIndexPhotoS = (currentImgIndexPhotoS + 1) % photoS_img.length;
            imgContainerPhotoSImg.src = photoS_img[currentImgIndexPhotoS].getAttribute('src');

            currentImgIndexBlenderVid = (currentImgIndexBlenderVid + 1) % b_videos.length;
            vidContainer.src = b_videos[currentImgIndexBlenderVid].getAttribute('src');

        }

        else if (event.key === 'ArrowLeft' || event.keyCode === 37) {

            currentImgIndexBlenderImg = (currentImgIndexBlenderImg - 1 + b_images.length) % b_images.length;
            imgContainerBlenderImg.src = b_images[currentImgIndexBlenderImg].getAttribute('src');

            currentImgIndexCerti = (currentImgIndexCerti - 1 + certi_img.length) % certi_img.length;
            imgContainerCertiImg.src = certi_img[currentImgIndexCerti].getAttribute('src');

            currentImgIndexPhotoG = (currentImgIndexPhotoG - 1 + photoG_img.length) % photoG_img.length;
            imgContainerPhotoGImg.src = photoG_img[currentImgIndexPhotoG].getAttribute('src');

            currentImgIndexPhotoS = (currentImgIndexPhotoS - 1 + photoS_img.length) % photoS_img.length;
            imgContainerPhotoSImg.src = photoS_img[currentImgIndexPhotoS].getAttribute('src');

            currentImgIndexBlenderVid = (currentImgIndexBlenderVid - 1 + b_videos.length) % b_videos.length;
            vidContainer.src = b_videos[currentImgIndexBlenderVid].getAttribute('src');

        }
    });
    // KeyUp End

    // Start Menu Start
    winBtn.addEventListener('click', () => {
        if (startMenu.style.display === 'flex') {
            startMenu.style.animation = 'closeDown 0.2s linear'
            startMenu.addEventListener('animationend', () => {
                if (event.animationName === 'closeDown') {
                    startMenu.style.display = 'none';
                }
            });
        } else {
            startMenu.style.animation = 'openFromDown 0.2s linear'
            startMenu.style.display = 'flex'
        }
    });

    trayIcon.addEventListener('click', () => {
        trayIconInt.classList.toggle('rotated');

        if (trayApps.style.display === 'flex') {
            trayApps.style.animation = 'trayIconsClose 0.1s linear';
            trayApps.addEventListener('animationend', () => {
                if (event.animationName === 'trayIconsClose') {
                    trayApps.style.display = 'none';
                }
            });
        } else {
            trayApps.style.animation = 'trayIconsOpen 0.2s linear';
            trayApps.style.display = 'flex';
        }
    });
    // Start Menu End

    //Different FileExp Logic Start

    //projects folder
    const sidebarElements = [
        sidebarProj,
        sidebarBlenderVid,
        sidebarBlenderImg,
        sidebarPhotoshop,
        sidebarPhotography,
        sidebarCetificates
    ];

    function openProjFolder() {
        sidebarElements.forEach(element => {
            element.classList.toggle('active-li', element === sidebarProj);
        });

        fileExpAddressBarImg.src = 'images/document.png'
        fileExpAddressBarText.innerHTML = 'Projects'

        showElements(projFiles, fileExpHead)
        hideElements(blenderVideos, blenderImages, certisFiles, photoSFiles, photoGFiles)

        appOpen(fileExp)
    }

    function openBlenderImageFolder() {
        sidebarElements.forEach(element => {
            element.classList.toggle('active-li', element === sidebarBlenderImg);
        });

        fileExpAddressBarImg.src = 'images/blender.png'
        fileExpAddressBarText.innerHTML = 'Blender Images'

        showElements(blenderImages)
        hideElements(blenderVideos, projFiles, certisFiles, photoSFiles, photoGFiles, fileExpHead)

        appOpen(fileExp)
    }

    function openBlenderVideoFolder() {
        sidebarElements.forEach(element => {
            element.classList.toggle('active-li', element === sidebarBlenderVid);
        });

        fileExpAddressBarImg.src = 'images/blender.png'
        fileExpAddressBarText.innerHTML = 'Blender Videos'

        showElements(blenderVideos)
        hideElements(blenderImages, projFiles, certisFiles, photoSFiles, photoGFiles, fileExpHead)

        appOpen(fileExp)
    }

    function openCertiFolder() {
        sidebarElements.forEach(element => {
            element.classList.toggle('active-li', element === sidebarCetificates);
        });

        fileExpAddressBarImg.src = 'images/certificate.png'
        fileExpAddressBarText.innerHTML = 'Certificates'

        showElements(certisFiles)
        hideElements(blenderVideos, projFiles, blenderImages, photoSFiles, photoGFiles, fileExpHead)

        appOpen(fileExp)
    }

    function openPhotoGFolder() {
        sidebarElements.forEach(element => {
            element.classList.toggle('active-li', element === sidebarPhotography);
        });

        fileExpAddressBarImg.src = 'images/photography.png'
        fileExpAddressBarText.innerHTML = 'PhotoGraphy'

        showElements(photoGFiles)
        hideElements(blenderVideos, projFiles, blenderImages, photoSFiles, certisFiles, fileExpHead)

        appOpen(fileExp)
    }

    function openPhotoSFolder() {
        sidebarElements.forEach(element => {
            element.classList.toggle('active-li', element === sidebarPhotoshop);
        });

        fileExpAddressBarImg.src = 'images/photoshop.png'
        fileExpAddressBarText.innerHTML = 'PhotoShop'

        showElements(photoSFiles)
        hideElements(blenderVideos, projFiles, blenderImages, certisFiles, photoGFiles, fileExpHead)

        appOpen(fileExp)
    }

    projFolder.addEventListener('click', openProjFolder);
    sidebarProj.addEventListener('click', openProjFolder);

    b_imgIcon.addEventListener('click', openBlenderImageFolder);
    sidebarBlenderImg.addEventListener('click', openBlenderImageFolder);

    b_vidIcon.addEventListener('click', openBlenderVideoFolder);
    sidebarBlenderVid.addEventListener('click', openBlenderVideoFolder);

    certiIcon.addEventListener('click', openCertiFolder);
    sidebarCetificates.addEventListener('click', openCertiFolder);

    photoGIcon.addEventListener('click', openPhotoGFolder);
    sidebarPhotography.addEventListener('click', openPhotoGFolder);

    photoSIcon.addEventListener('click', openPhotoSFolder);
    sidebarPhotoshop.addEventListener('click', openPhotoSFolder);

    //Different FileExp Logic End

    // Startup Page Start
    const startUP = document.getElementById('startUP');
    const hi = document.getElementById('hi');
    const loginImg = document.getElementById('loginImg');
    const loginBtn = document.getElementById('loginBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    hi.addEventListener('animationend', () => {
        hi.style.display = 'none'
        loginImg.style.display = 'block'
    });

    loginImg.addEventListener('animationend', () => {
        loginBtn.style.display = 'block'
    });

    loginBtn.addEventListener('animationend', () => {
        cancelBtn.style.display = 'block'
    });

    loginBtn.addEventListener('click', () => {
        startUP.style.animation = 'startUPclose 1s'
        startUP.addEventListener('animationend', () => {
            startUP.style.display = 'none'
        });
    });

    cancelBtn.addEventListener('click', () => {
        window.close()
    });

    // Startup Page End

    // ShutDown Page Start
    const textToType = "Hope you enjoyed your visit";
    const typewriterTextElement = document.getElementById('typing');
    const shutDown = document.getElementById('shutDown');
    const shutDownBtn = document.getElementById('powerBtn');

    function typeWriter(text, speed) {
        let i = 0;

        function type() {
            if (i < text.length) {
                typewriterTextElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    shutDownBtn.addEventListener('click', () => {
        shutDown.style.display = 'flex'
        typeWriter(textToType, 100);

        setTimeout(() => {
            window.close();
        }, 3200);
    });
    // ShutDown Page End

    //Reload
    // window.addEventListener('beforeunload', function (event) {
    //     event.preventDefault();
    //     alert('Reloading will reboot you PC.');
    // });

    // window.onbeforeunload = function() {
    //     return "Dude, are you sure you want to leave? Think of the kittens!";
    // }

});