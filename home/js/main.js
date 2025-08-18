$(document).ready(function(){
    var navLinks = [
    {
        navLink: {
            navText: 'Home',
            url: 'index.html'
        }
    },
    {
        navLink: {
            navText: 'About',
            url: 'about.html'
        }
    },
    {
        navLink: {
            navText: 'Members',
            url: 'members.html'
        }
    },
    {
        navLink: {
            navText: 'Media',
            url: 'media.html'
        }
    },
    {
        navLink: {
            navText: 'Shows',
            url: 'shows.html'
        }
    },
    {
        navLink: {
            navText: 'Contact',
            url: 'contact.html'
        }
    }];


    var navDirectives = {
        navLink: {
            navText: {
                href: function(params){
                    return this.url;
                },

                text: function(params){
                    return this.navText;
                }
            }
        }

    }

    var socialLinks = [
    {
        socialLink: {
            text: 'Facebook',
            url: 'https://www.facebook.com/MITMochaMoves',
        }
    },
    {
        socialLink: {
            text: 'Youtube',
            url: 'https://www.youtube.com/channel/UCiqJ6HsmvosRWPdEOw6iUOA'
        }
    },
    {
        socialLink: {
            text: 'Twitter',
            url: 'https://twitter.com/mitmochamoves'
        }
    },
    {
        socialLink: {
            text: 'Instagram',
            url: 'https://instagram.com/mitmochamoves/'
        }
    }];

    var socialDirectives = {
        socialLink: {
            socialText: {
                href: function(params){
                    return this.url;
                },

                html: function(params){
                    return this.text;
                }
            }
        }
    }

    var membersActive = [
    {
        member: {
            src: 'img/members/2025-2026/akiva.jpg',
            firstName: "Akiva",
            lastName: 'Rosenzweig',
            class: "Class of 2028",
            position: ''
        }
    },
    {
        member: {
            src: 'img/members/2025-2026/amber.jpg',
            firstName: "Amber",
            lastName: 'Luo',
            class: "Class of 2026",
            position: ""
        }
    },
    {
        member: {
            src: 'img/members/2025-2026/bridgit.jpg',
            firstName: "Bridget",
            lastName: 'Li',
            class: "Class of 2027",
            position: "Secretary"
        }
    },
    {
        member: {
            src: 'img/members/2025-2026/chris.jpg',
            firstName: "Chris",
            lastName: 'Schmidt-Hong',
            class: "Class of 2027",
            position: 'Show Coordinator'
        }
    },
    {
        member: {
            src: 'img/members/2025-2026/devin.jpg',
            firstName: "Devin",
            lastName: 'Baynes',
            class: "Class of 2026",
            position: ''
        }
    },
    {
        member: {
            src: 'img/members/2025-2026/emily.jpg',
            firstName: "Emily",
            lastName: 'Bautista',
            class: "Class of 2026",
            position: ''
        }
    },
    // {
    //     member: {
    //         src: 'img/members/2025-2026/no-photo.jpg',
    //         firstName: "Ethan",
    //         lastName: 'Liu',
    //         class: "Class of 2028",
    //         position: ''
    //     }
    // },
    {
        member: {
            src: 'img/members/2025-2026/jocelyn.jpg',
            firstName: "Jocelyn",
            lastName: 'Paek',
            class: "class of 2028",
            position: "Publicity Chair"
        }
    },
    {
        member: {
            src: 'img/members/2025-2026/josleen.jpg',
            firstName: "Josleen",
            lastName: 'St. Luce',
            class: "Class of 2026",
            position: "Show Coordinator"
        }
    },

    {
        member: {
            src: 'img/members/2025-2026/kira.jpg',
            firstName: "Kira",
            lastName: 'Pospeshil',
            class: "Class of 2026",
            position: "President"
        }
    },

    {
        member: {
            src: 'img/members/2025-2026/nannette.jpg',
            firstName: "Nannette",
            lastName: 'Chatman',
            class: "Class of 2026",
            position: 'President'
        }
    },

    {
        member: {
            src: 'img/members/2025-2026/sophia.jpg',
            firstName: "Sophia",
            lastName: 'Hou',
            class: "Class of 2028",
            position: 'Treasurer'
        }
    }]

    var memberDirectives = {
        member: {
            memberImg: {
                style: function(params){
                    return "background-image: url("+this.src+");";
                }
            },
            memberInfo: {
                html: function(params){
                    return "<p>"+this.firstName + ' ' + this.lastName + "<br>" + this.class + "<br>" + this.position + "<br>";
                }
            }
        }
    };

    var videos = [
    {
        video: {
            src: 'https://www.youtube.com/watch?v=aXJLTbJcQkM',
            videoID: 'aXJLTbJcQkM'
        }
    },
    {
        video: {
            src: 'https://www.youtube.com/watch?v=3AqzClZmgaQ',
            videoID: '3AqzClZmgaQ'
        }
    },
    {
        video: {
            src: 'https://www.youtube.com/watch?v=Jff6WzXxe5c',
            videoID: 'Jff6WzXxe5c'
        }
    },
    {
        video: {
            src: 'https://www.youtube.com/watch?v=MhEBmr2w5uo&t=9s',
            videoID: 'MhEBmr2w5uo'
        }
    },
    ];

    var videoDirectives = {
        video: {
            videoLink: {
                // src: function(params) {
                //     return this.src;
                // },
                id: function(params) {
                    return this.videoID;
                }
            }
        }
    }

    $('.socialLinks').render(socialLinks, socialDirectives);
    $('.navLinks').render(navLinks, navDirectives);
    $('.members-active').render(membersActive, memberDirectives);
    // $('.members-alum').render(membersAlum, memberDirectives);
    $('.videos').render(videos, videoDirectives);


    $('.ham-container').click(function(){
        $('#menu').addClass('open');
    });

    $('.menu-close').click(function(){
        $('#menu').removeClass('open');
    });

    $(function() {
        $(".youtube").each(function() {
        // Based on the YouTube ID, we can easily find the thumbnail image
        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
        $(this).css('height',$(this).parent.height);

        // Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', {'class': 'play'}));

        $(document).delegate('#'+this.id, 'click', function() {
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        });
    });
    });
});
