function myWindow() {
    var myForm = document.getElementById("myForm");

    // validate email
    var emlWarning = document.getElementById("emailErrMessage");
    emlWarning.style.display = "none";
    var email = myForm.inpEmail.value;
    //email validation regex per W3Schools
    var testPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!testPattern.test(email)) {
        emlWarning.style.display = "inline";
    }
    
    // if email is valid, then continue
    else {
        myText = ("<html>\n<head>\n<title>My Resume</title>\n</head>\n<body>\n");
        myText += ("</body>\n</html>");

        //replicate the original window size
        var wndParms = "'width=" + window.innerHeight;
        wndParms += ",height=" + window.innerHeight;
        wndParms += ",top=" + (window.screenTop + 25);
        wndParms += ",left=" + (window.screenLeft + 25) + "'";
        flyWindow = window.open('about:blank','Your Resume',wndParms);
        flyDoc = flyWindow.document;
        flyDoc.write(myText);
        flyDoc.body.style.fontFamily = "\"Trebuchet MS\",Verdana,Helvetica";

        var section1 = "<div id=\"uName\">" + myForm.inpName.value + "</div>";
        flyDoc.write(section1);
        var uName = flyDoc.getElementById("uName").style;
        uName.fontSize = "30";
        uName.padding = "8px 2px 8px 8px";
        uName.color = "white";
        uName.backgroundColor = "black";

        var section2 = "<div id=\"contact\">" + myForm.inpCity.value + ", ";
        section2 += myForm.inpState.value + " &bull; " + myForm.inpPhone.value;
        section2 += " &bull; " + email + "<br />";
        section2 += myForm.inpLinkedin.value + " &bull; Portfolio: ";
        section2 += myForm.inpPortfolio.value + "</div>";
        flyDoc.write(section2);

        var section3 = "<div id=\"jobTitle\">" + myForm.inpJobTitle.value + "</div>";
        flyDoc.write(section3);
        var jobTitle = flyDoc.getElementById("jobTitle").style;
        jobTitle.fontSize = "24";
        jobTitle.color = "#808080";
        jobTitle.marginTop = "12px";

        var section4 = "<div id=\"jobSkills\">";
        section4 += "&bull; " + myForm.inpJobSkills1.value + "<br />";
        section4 += "&bull; " + myForm.inpJobSkills2.value + "<br />";
        section4 += "&bull; " + myForm.inpJobSkills3.value + "<br />";
        flyDoc.write(section4);

        var section5 = "<div id=\"toolbox\">" + "Technical Toolbox" + "</div>";
        flyDoc.write(section5);
        var toolbox = flyDoc.getElementById("toolbox").style;
        toolbox.fontSize = "24";
        toolbox.color = "#808080";
        toolbox.marginTop = "12px";

        flyDoc.write("<div id=\"container1\">");

        var section6 = "<div id=\"toolGroup1\">" + myForm.inpTechSkillsGroupName1.value;
        section6 += "</div>";
        flyDoc.write(section6);
        var toolGrp1 = flyDoc.getElementById("toolGroup1").style;
        toolGrp1.margin = "auto";
        toolGrp1.width = "20%";
        toolGrp1.float = "left";
        toolGrp1.display = "inline-block";

        var section7 = "<div id=\"tools1\">" + myForm.inpTechSkills1.value + "</div>";
        flyDoc.write(section7);
        var tools1 = flyDoc.getElementById("tools1").style;
        tools1.margin = "auto";
        tools1.width = "78%";
        tools1.float = "left";
        tools1.display = "inline-block";

        flyDoc.write("</div>");

        flyDoc.write("<div id=\"container2\">");

        var section8 = "<div id=\"toolGroup2\">" + myForm.inpTechSkillsGroupName2.value;
        section8 += "</div>";
        flyDoc.write(section8);
        var toolGrp2 = flyDoc.getElementById("toolGroup2").style;
        toolGrp2.margin = "auto";
        toolGrp2.width = "20%";
        toolGrp2.float = "left";
        toolGrp2.display = "inline-block";

        var section9 = "<div id=\"tools2\">" + myForm.inpTechSkills2.value + "</div>";
        flyDoc.write(section9);
        var tools2 = flyDoc.getElementById("tools2").style;
        tools2.margin = "auto";
        tools2.width = "78%";
        tools2.float = "left";
        tools2.display = "inline-block";

        flyDoc.write("</div>");
   
        var section10 = "<div id=\"education\">" + "Education" + "</div>";
        flyDoc.write(section10);
        var education = flyDoc.getElementById("education").style;
        education.fontSize = "24";
        education.color = "#808080";
        education.marginTop = "12px";

        var section11 = "<div id=\"school\">" + myForm.inpSchool.value + "</div>";
        flyDoc.write(section11);

        var section12 = "<div id=\"education\">" + myForm.inpDegree.value.bold() + "</div>";
        flyDoc.write(section12);
        
        var courses = myForm.inpCourses.value;
        var aryCourses = courses.split("\n");
        var col1 = "";
        var col2 = "";
        for (i = 0; i <= Math.floor(aryCourses.length) / 2; i++) {
            col1 += "&bull; " + aryCourses[i] + "<br/>";
        }
        //chop off the last line break
        col1 = col1.substr(0, col1.length - 5);
        while (i < aryCourses.length) {
            col2 += "&bull; " + aryCourses[i++] + "<br/>";
        }
        col2 = col2.substr(0, col2.length - 5);
        
        flyDoc.write("<div id=\"container3\">");

        var section13 = "Courses:".bold() + "<br/> \n";
        section13 += "<div id=\"courses1\">" + col1 + " </div>";
        flyDoc.write(section13);
        var courses1 = flyDoc.getElementById("courses1").style;
        courses1.margin = "auto";
        courses1.width = "50%";
        courses1.float = "left";
        courses1.display = "inline-block";

        var section14 = "<div id=\"courses2\">" + col2 + "</div>";
        flyDoc.write(section14);
        var courses2 = flyDoc.getElementById("courses2").style;
        courses2.margin = "auto";
        courses2.width = "50%";
        courses2.float = "right";
        courses2.display = "inline-block";
        
        flyDoc.write("</div>");

        var section15 = "<div id=\"experience\">Experience </div>";
        flyDoc.write(section15);
        var experience = flyDoc.getElementById("experience").style;
        experience.fontSize = "24";
        experience.color = "#808080";
        experience.marginTop = "12px";
        experience.width = "100%";
        experience.textAlign = "left";
        experience.float = "left";
        experience.border="1px solid white";

        flyDoc.write("<p> </p>")
        flyDoc.write("<div>" + myForm.inpEmployer1.value + "</div>");
        flyDoc.write("<div>" + myForm.inpStartDate1.value + " through " 
            + myForm.inpEndDate1.value + "</div>");
        flyDoc.write("<ul>");
        var jobWins1 = myForm.inpJobDesc1.value.split("\n");
        for (i = 0; i < jobWins1.length; i++) {
            flyDoc.write("<li>" + jobWins1[i] + "</li>" );
        }
        flyDoc.write("</ul>");

        flyDoc.write("<div>" + myForm.inpEmployer2.value + "</div>");
        flyDoc.write("<div>" + myForm.inpStartDate2.value + " through " 
            + myForm.inpEndDate2.value + "</div>");
        flyDoc.write("<ul>");
        var jobWins2 = myForm.inpJobDesc2.value.split("\n");
        for (i = 0; i < jobWins2.length; i++) {
            flyDoc.write("<li>" + jobWins2[i] + "</li>" );
        }
        flyDoc.write("</ul>");

        flyDoc.write("<div>" + myForm.inpEmployer3.value + "</div>");
        flyDoc.write("<div>" + myForm.inpStartDate3.value + " through " 
            + myForm.inpEndDate3.value + "</div>");
        flyDoc.write("<ul>");
        var jobWins3 = myForm.inpJobDesc3.value.split("\n");
        for (i = 0; i < jobWins3.length; i++) {
            flyDoc.write("<li>" + jobWins3[i] + "</li>" );
        }
        flyDoc.write("</ul>");
    }
}
