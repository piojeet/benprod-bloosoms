(function() {
    const currentYear = new Date().getFullYear();
    const target_date = new Date(`September 5, ${currentYear} 23:59:59`).getTime();

    let days, hours, minutes, seconds; // variables for time units

    const daysElement = document.querySelector(".date");
    const hoursElement = document.querySelector(".hours");
    const minutesElement = document.querySelector(".minutes");
    const secondsElement = document.querySelector(".second");

    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        console.error('One or more countdown elements not found.');
        return;
    }

    getCountdown();
    setInterval(getCountdown, 1000);

    function getCountdown() {
        const current_date = new Date().getTime();
        let seconds_left = (target_date - current_date) / 1000;

        if (seconds_left < 0) {
            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
            return;
        }

        days = pad(Math.floor(seconds_left / 86400));
        seconds_left %= 86400;

        hours = pad(Math.floor(seconds_left / 3600));
        seconds_left %= 3600;

        minutes = pad(Math.floor(seconds_left / 60));
        seconds = pad(Math.floor(seconds_left % 60));

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }

    function pad(n) {
        return (n < 10 ? '0' : '') + n;
    }
})();



$.fn.circleType = function(options) {
    var settings = {
        dir: 1,
        position: 'relative'
    };
    if (typeof($.fn.lettering) !== 'function') {
        console.log('Lettering.js is required');
        return;
    }
    return this.each(function () {
        if (options) { 
            $.extend(settings, options);
        }
        var elem = this, 
            delta = (180 / Math.PI),
            ch = parseInt($(elem).css('line-height'), 10),
            fs = parseInt($(elem).css('font-size'), 10),
            txt = elem.innerHTML.replace(/^\s+|\s+$/g, '').replace(/\s/g, '&nbsp;'),
            letters, 
            center;
  
        elem.innerHTML = txt;
        $(elem).lettering();
  
        elem.style.position =  settings.position;
  
        letters = elem.getElementsByTagName('span');
        center = Math.floor(letters.length / 2);
  
        var layout = function () {
            var tw = 0, 
                i,
                offset = 0,
                minRadius, 
                origin, 
                innerRadius,
                l, style, r, transform;
  
            for (i = 0; i < letters.length; i++) {
                tw += letters[i].offsetWidth;
            }
            minRadius = (tw / Math.PI) / 2 + ch;
  
            if (settings.fluid && !settings.fitText) {
                settings.radius = Math.max(elem.offsetWidth / 2, minRadius);
            } else if (!settings.radius) {
                settings.radius = minRadius;
            }
  
            if (settings.dir === -1) {
                origin = 'center ' + (-settings.radius + ch) / fs + 'em';
            } else {
                origin = 'center ' + settings.radius / fs + 'em';
            }
  
            innerRadius = settings.radius - ch;
  
            for (i = 0; i < letters.length; i++) {
                l = letters[i];
                offset += l.offsetWidth / 2 / innerRadius * delta;
                l.rot = offset;                      
                offset += l.offsetWidth / 2 / innerRadius * delta;
            }
            for (i = 0; i < letters.length; i++) {
                l = letters[i];
                style = l.style;
                r = (-offset * settings.dir / 2) + l.rot * settings.dir;
                transform = 'rotate(' + r + 'deg)';
  
                style.position = 'absolute';
                style.left = '50%';
                style.marginLeft = -(l.offsetWidth / 2) / fs + 'em';
  
                style.webkitTransform = transform;
                style.MozTransform = transform;
                style.OTransform = transform;
                style.msTransform = transform;
                style.transform = transform;
  
                style.webkitTransformOrigin = origin;
                style.MozTransformOrigin = origin;
                style.OTransformOrigin = origin;
                style.msTransformOrigin = origin;
                style.transformOrigin = origin;
                if(settings.dir === -1) {
                    style.bottom = 0;
                }
            }
  
            if (settings.fitText) {
                if (typeof($.fn.fitText) !== 'function') {
                    console.log('FitText.js is required when using the fitText option');
                } else {
                    $(elem).fitText();
                    $(window).resize(function () {
                        updateHeight();
                    });
                }
            }
            updateHeight();
        };
  
        var getBounds = function (elem) {
            var docElem = document.documentElement,
                box = elem.getBoundingClientRect();
            return {
                top: box.top + window.pageYOffset - docElem.clientTop,
                left: box.left + window.pageXOffset - docElem.clientLeft,
                height: box.height
            };
        };        
  
        var updateHeight = function () {
            var mid = getBounds(letters[center]),
                first = getBounds(letters[0]),
                h;
            if (mid.top < first.top) {
                h = first.top - mid.top + first.height;
            } else {
                h = mid.top - first.top + first.height;
            }
            elem.style.height = h + 'px';  
        };
  
        if (settings.fluid && !settings.fitText) {
            $(window).resize(function () {
                layout();
            });
        }    
  
        if (document.readyState !== "complete") {
            elem.style.visibility = 'hidden';
            $(window).on('load', function () {
                elem.style.visibility = 'visible';
                layout();
            });
        } else {
            layout();
        }
    });
  };
  
  $('.curved-text').each(function(index, element) {
    var options = { position: 'absolute', dir: 1, radius: 200 };
    if (index === 0) {
        options.dir = 1; 
    } else {
        options.dir = 1; 
    }
    $(element).circleType(options);
  });
  
  
  
  
  
  
  
  
  const radio1 = document.getElementById('flexRadioDefault1');
  const radio2 = document.getElementById('flexRadioDefault2');
  const radio3 = document.getElementById('flexRadioDefault3');
  const radio4 = document.getElementById('flexRadioDefault4');
  const firstSelect = document.querySelector('.first-select');
  const secondSelect = document.querySelector('.second-select');
  const contactSection = document.querySelector('.contact-section');
  
  radio1.addEventListener('change', handleScale);
  radio2.addEventListener('change', handleScale);
  radio3.addEventListener('change', handleScale);
  radio4.addEventListener('change', handleScale);
  
  function handleScale() {
     
      contactSection.classList.remove('scale-1', 'scale-1-2', 'scale-1-5');
  
      
      if (radio1.checked && radio3.checked) {
          
          contactSection.classList.add('scale-1-5');
      } else if (radio1.checked || radio3.checked) {

          contactSection.classList.add('scale-1-2');
      } else if (radio2.checked || radio4.checked) {

          contactSection.classList.add('scale-1');
      }
  

      if (radio1.checked) {
          firstSelect.classList.add('open');
      } else {
          firstSelect.classList.remove('open');
      }
  
      if (radio3.checked) {
          secondSelect.classList.add('open');
      } else {
          secondSelect.classList.remove('open');
      }
  }
  


  document.addEventListener('DOMContentLoaded', () => {
    const invitationSection = document.querySelector('.invit');
    const invitationButton = document.getElementById('invitation-button');
    const body = document.body;
    const audio = document.getElementById('background-audio');


    body.classList.add('overflow-hidden');

    
    invitationButton.addEventListener('click', () => {
        invitationSection.classList.add('hidden');
        body.classList.remove('overflow-hidden');
        
        
        audio.play(); 
    });
});

gsap.from(".main-maria", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".main-maria",
        markers: false 
    }
});

gsap.from(".circle-main", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".circle-main",
        markers: false 
    }
});

gsap.from(".circle-section", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".circle-main",
        markers: false 
    }
});

gsap.from(".container.henne", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".container.henne",
        markers: false 
    }
});

gsap.from(".contact-section", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-section",
        markers: false 
    }
});
