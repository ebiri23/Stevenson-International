const libraryNav = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a class="navbar-brand" href=""><div style="background-color: rgb(137, 247, 247); color: aliceblue; border: 1px solid rgb(1, 248, 248); padding: 15px; border-radius: 10px 20px 10px 20px;">I.S.J.L. Library</div></a>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" onclick="libraryAbout()" style="cursor: pointer;">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;" href="https://internationallibrary.online">Sign In</a>
            </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>`;
function libraryAbout() {
  document.body.innerHTML = `${libraryNav}<br><div>
    <h4 style="text-align: center;">
      <audio controls>
        <source src="LibraryAbout.mp3" type="audio/mpeg">
        <source src="LibraryAbout.ogg" type="audio/ogg">
      </audio>
    </h4>
  </div><br><h6 style="border-radius: 30px; padding: 30px; background-color: rgb(137, 247, 247);">We are seeing a change and a growth in science and technology like never before. Bookstore is different to library as you know it. We already have more than a hundred good bookstores online, but we do not have that much option when it comes to online libraries. The I.S.J.L. Library is the International Stevenson Jean Louis Library. We are dedicated to supplying to the reader a large amount of materials on a particular subject. Since our goal is to provide you with the best materials on a subject, some of these materials may have a fee required by the author or the edition house, but we are doing our best to target your attention to some great materials which are free of charge.</h6>`
};
function cultureLibrary() {
  document.body.innerHTML = `${libraryNav}<br><br><p><a href="https://library.oapen.org/bitstream/handle/20.500.12657/27476/oral-tradition-and-book-culture..pdf?sequence=1&isAllowed=y" target="_blank">Oral Tradition and Book Culture</a></p>
    <p><a href="https://files.eric.ed.gov/fulltext/ED479930.pdf" target="_blank">The Shaping School Culture Fieldbook. The Jossey-Bass Education Series.</a></p>
    <p><a href="https://walledculture.org/wp-content/uploads/2022/09/Walled-Culture-the-Book.pdf" target="_blank">Walled Culture</a></p>
    <p><a href="https://monoskop.org/images/f/f9/Said_Edward_Culture_and_Imperialism.pdf" target="_blank">Culture and Imperialism</a></p>
    <p><a href="https://www.cambridgescholars.com/resources/pdfs/978-1-5275-5688-1-sample.pdf" target="_blank">Language and Culture in the Intercultural World</a></p>`
};

function economyLibrary() {
  document.body.innerHTML = `${libraryNav}<br><br>  <p><a href="https://dawnquarles.weebly.com/uploads/6/8/1/5/68158207/economics_textbook.pdf" target="_blank">McDougal Littell ECONOMICS Concepts and Choices</a></p>
        <p><a href="https://sites.bu.edu/manove-ec101/files/2019/04/UMinnMicroeconomics.pdf" target="_blank">Principles of Economics</a></p>
        <p><a href="https://www.theigc.org/sites/default/files/2016/06/acemoglu-2007.pdf" target="_blank">Introduction to Modern Economic Growth Daron Acemoglu Department of Economics, Massachusetts Institute of Technology</a></p>
        <p><a href="https://ugess3.files.wordpress.com/2015/08/economic-development.pdf" target="_blank">Economic Development, FOURTH EDITION</a></p>
        <p><a href="https://www.icsi.edu/media/website/Business%20Economics%20(FndProg).pdf" target="_blank">Business Economics</a></p>
        <p><a href="https://icmai.in/upload/Students/Syllabus-2012/Study_Material_New/Foundation-Paper2-Revised.pdf" target="_blank">FUNDAMENTALS OF ACCOUNTING</a></p>
        <p><a href="https://www.opentextbooks.org.hk/system/files/export/12/12841/pdf/Accounting_I_12841.pdf" target="_blank">Accounting I</a></p>`
};

function geographyLibrary() {
  document.body.innerHTML = `${libraryNav}<br><br>  <p><a href="https://textbooks.wmisd.org/Downloads/6th/6thWorldFull.pdf" target="_blank">World Geography</a></p>
            <p><a href="https://www.coreknowledge.org/wp-content/uploads/2017/07/CKHG_G5_U9_GeographyUS_SR.pdf" target="_blank">The Geography of the United States</a></p>
            <p><a href="https://web.ung.edu/media/university-press/human-geography.pdf" target="_blank">Introduction to HUMAN GEOGRAPHY</a></p>
            <p><a href="https://geografiafisica.org/sem201901/geo112/bibliografia/articulos_libros/geografia_fisica_hecha_facil_Bryant_1986_LIBRO_BUENO.pdf" target="_blank">PHYSICAL GEOGRAPHY</a></p>`
};

function healthLibrary() {
  document.body.innerHTML = `${libraryNav}<br><br> <p><a href="https://www.dannydorling.org/wp-content/files/dannydorling_publication_id0984.pdf" target="_blank">Health, Place and Society</a></p>
                <p><a href="https://alraziuni.edu.ye/uploads/pdf/An-Introduction-to-Community-Health.pdf" target="_blank">An Introduction to Community Health</a></p>
                <p><a href="https://www.cartercenter.org/resources/pdfs/health/ephti/library/lecture_notes/health_extension_trainees/intro_healtheducation.pdf" target="_blank">Introduction to Health Education</a></p>
                <p><a href="https://www.westerncape.gov.za/assets/departments/health/rthb_booklet.pdf" target="_blank">Road to Health</a></p>
                <p><a href="https://ghlc.lshtm.ac.uk/files/2011/10/GHLC-book.pdf" target="_blank">Good Health at Low Cost</a></p>
                <p><a href="http://womenshealth.msf.org/wp-content/uploads/2015/03/Womens-Health-Book.pdf" target="_blank">Womens Health</a></p>
                <p><a href="https://www.adventistpublishing.org/wp-content/uploads/2018/04/HealthandWellness.pdf" target="_blank">Health and Wellness</a></p>
                <p><a href="https://www.cartercenter.org/resources/pdfs/health/ephti/library/lecture_notes/health_science_students/ln_intro_ph_final.pdf" target="_blank">Introduction to Public Health</a></p>
                <p><a href="https://www.bsu.edu.eg/Backend/Uploads/PDF/Prof/Subjects/177.pdf" target="_blank">COMMUNITY HEALTH NURSING</a></p>
                <p><a href="https://media4.egwwritings.org/pdf/en_CH.pdf" target="_blank">Counsels on Health</a></p>`
};

function historyLibrary() {
  document.body.innerHTML = `${libraryNav}<br><br>  <p><a href="https://www.pmsd.org/cms/lib/PA01916596/Centricity/Domain/359/2016%20AP%20World%20History%20Summer%20Reading%20A%20Little%20History%20of%20the%20World.pdf" target="_blank">Little History of the World</a></p>
                    <p><a href="https://publications.iowa.gov/27598/1/World%20History%201930.pdf" target="_blank">World History 1930</a></p>
                    <p><a href="https://ssandhbooks.files.wordpress.com/2015/04/a-history-of-the-world1.pdf" target="_blank">A History of the World From the 20th to the 21st Century</a></p>
                    <p><a href="https://www.baylor.edu/content/services/document.php/43912.pdf" target="_blank">Introduction to Oral History</a></p>
                    <p><a href="https://library.oapen.org/bitstream/handle/20.500.12657/30287/646754.pdf?sequence=1&isAllowed=y" target="_blank">On History: Introduction to World History </a></p>
                    <p><a href="https://www.fisica.net/relatividade/stephen_hawking_a_brief_history_of_time.pdf" target="_blank">A Brief History of Time - Stephen Hawking</a></p>
                    <p><a href="https://www.internetsociety.org/wp-content/uploads/2017/09/ISOC-History-of-the-Internet_1997.pdf" target="_blank">Brief History of the Internet</a></p>
                    <p><a href="https://www.diva-portal.org/smash/get/diva2:952904/FULLTEXT01.pdf" target="_blank">Uses of History in History Education</a></p>
                    <p><a href=""></a></p>`
};

function lawLibrary() {
  document.body.innerHTML = `${libraryNav}<br><br><p><a href="https://www.uncfsu.edu/assets/Documents/College%20of%20Business%20and%20Economics/legal.pdf" target="_blank">INTRODUCTION TO LAW AND LEGAL REASONING</a></p>
                        <p><a href="https://uculawlib.files.wordpress.com/2016/10/phil-harris-on-an-introduction-to-law-law-in-context.pdf" target="_blank">An Introduction to Law, Seventh Edition</a></p>
                        <p><a href="https://www.filosoficas.unam.mx/~cruzparc/empire.pdf" target="_blank">Law's Empire</a></p>
                        <p><a href="https://library.oapen.org/bitstream/handle/20.500.12657/33630/459514.pdf?sequence=1" target="_blank">Rule of Law</a></p>
                        <p><a href="https://web.law.duke.edu/cspd/pdf/ipcasebook.pdf" target="_blank">INTELLECTUAL PROPERTY: LAW & THE INFORMATION SOCIETY</a></p>
                        <p><a href="https://www.ojp.gov/pdffiles1/Digitization/70396NCJRS.pdf" target="_blank">CRIMINAL LAW WORKBOOK </a></p>
                        <p><a href="https://www.hzu.edu.in/uploads/2020/10/business-law.pdf" target="_blank">BUSINESS LAW</a></p>`
};

function literatureLibrary() {
  document.body.innerHTML = `${libraryNav}<br><br>  <p><a href="https://ung.edu/university-press/_uploads/files/World-Lit-Part-3.pdf" target="_blank">World l i t e r a t u r e</a></p>
                            <p><a href="https://www.opentextbooks.org.hk/system/files/export/14/14914/pdf/Literature_the_Humanities_and_Humanity_14914.pdf" target="_blank">Literature, the Humanities, and Humanity</a></p>
                            <p><a href="https://s3.amazonaws.com/lumenlearning/success/Master+PDFs/IntroLiterature_3-3-17.pdf" target="_blank">Introduction to Literature</a></p>
                            <p><a href="https://www.unife.it/letterefilosofia/lm.lingue/insegnamenti/letteratura-inglese-ii/materiale-didattico-2019-2020/Edward%20Albert-%20History%20of%20English%20Literature-%20OUP-%202000.pdf" target="_blank">Edward Albert- History of English Literature</a></p>
                            <p><a href="https://static.america.gov/uploads/sites/8/2016/05/2007_Outline_AmericanLiterature_English_Digital.pdf" target="_blank">AMERICAN LITERATURE</a></p>`
};

function politicLibrary() {
  document.body.innerHTML = `${libraryNav}<br><br>  <p><a href="https://openresearch-repository.anu.edu.au/bitstream/1885/114762/2/b11620912.pdf" target="_blank">THE STUDY OF POLITICS</a></p>
                                <p><a href="http://www.untag-smd.ac.id/files/Perpustakaan_Digital_2/POLITICS%20AND%20GOVERNMENT%20Politics%20in%20the%20USA.pdf" target="_blank">Politics in the USA, Sixth Edition</a></p>
                                <p><a href="https://newuniversityinexileconsortium.org/wp-content/uploads/2022/02/the-language-of-politics.pdf" target="_blank">The Language of Politics</a></p>
                                <p><a href="https://www.booksfree.org/wp-content/uploads/2022/03/The-Politics-Book-Big-Ideas-Simply-Explained-booksfree.org_.pdf" target="_blank">The Politics Book</a></p>
                                <p><a href="https://library.oapen.org/bitstream/handle/20.500.12657/52943/1/9781909890732.pdf" target="_blank">Conflict, War and Revolution</a></p>
                                <p><a href="https://www.dannydorling.org/books/betterpolitics/dorling-betterpolitics.pdf" target="_blank">A BETTER POLITICS How Government Can Make Us Happier</a></p>
                                <p><a href="https://oll-resources.s3.us-east-2.amazonaws.com/oll3/store/titles/579/0033-01_Bk_SM.pdf" target="_blank">POLITICS OF ARISTOTLE </a></p> 
                                <p><a href="https://jyx.jyu.fi/bitstream/handle/123456789/46807/978-951-39-6284-5.pdf" target="_blank">THE POLITICS OF WORLD POLITICS</a></p>
                                <p><a href="https://ps12.caltech.edu/documents/3208/PS12-version_Book.pdf" target="_blank">Strategy and Politics</a></p>
                                <p><a href="https://www.tndalu.ac.in/econtent/44_Political_Science.pdf" target="_blank">Political Science</a></p>`
};

function religionLibrary() {
  document.body.innerHTML = `${libraryNav}<br><br><p><a href="https://www.gutenberg.org/files/30323/30323-pdf.pdf" target="_blank">The Book of Religions</a></p>
                                    <p><a href="https://csrs.nd.edu/assets/59930/williams_1902.pdf" target="_blank">The Varieties of Religious Experience </a></p>
                                    <p><a href="https://monoskop.org/images/a/a2/Durkheim_Emile_The_Elementary_Forms_of_Religious_life_1995.pdf" target="_blank">The Elementary Forms of Religious life</a></p>
                                    <p><a href="https://www.ccel.org/ccel/c/calvin/institutes/cache/institutes.pdf" target="_blank">The Institutes of the Christian Religion</a></p>
                                    <p><a href="https://cre.church.mt/wp-content/uploads/books/Religion-Year-6-EN.pdf" target="_blank">The human story of God</a></p>
                                    <p><a href="https://static1.squarespace.com/static/590be125ff7c502a07752a5b/t/600af5083baa0c79aeafd30b/1611330831433/Faris%2C+John+Thomson%2C+The+Book+of+Faith+in+God.pdf" target="_blank">The book of faith in God</a></p>
                                    <p><a href="https://increasenow.com/2019/wp-content/uploads/2019/03/FAITH-The-Book.pdf" target="_blank">FAITH</a></p>
                                    <p><a href="https://hopecbc.org/files/pdf/ryle-practical-religion.pdf" target="_blank">PRACTICAL RELIGION</a></p>`
};

function scienceLibrary() {
  document.body.innerHTML = `${libraryNav}<br><br><p><a href="https://www.ulm.edu.pk/departments/admin/upload/downloads/202110030921.pdf" target="_blank">BASIC MATHEMATICS</a></p>
                                        <p><a href="https://mrbartonmaths.com/resources/the-maths-ebook.pdf" target="_blank">The Maths ebook</a></p>
                                        <p><a href="https://www.softouch.on.ca/kb/data/Universal%20Book%20of%20Mathematics%20(The).pdf" target="_blank">Universal Book of Mathematics</a></p>
                                        <p><a href="https://mml-book.github.io/book/mml-book.pdf" target="_blank">Mathematics for Machine Learning</a></p>
                                        <p><a href="https://dept.clcillinois.edu/biodv/PrinciplesOfBiology.pdf" target="_blank">Principles of Biology - An Introdution to Biological Concepts</a></p>
                                        <p><a href="https://kamsc.github.io/assets/links/Biology%20for%20Dummies.pdf" target="_blank">Biology For Dummies, 2nd Edition</a></p>
                                        <p><a href="https://biology.org.ua/files/lib/Raven_Johnson_McGraw-Hill_Biology.pdf" target="_blank">The Science of Biology</a></p>
                                        <p><a href="http://www.bio-nica.info/Biblioteca/Bolsover2004CellBiology.pdf" target="_blank">CELL BIOLOGY</a></p>
                                        <p><a href="https://core.ac.uk/download/pdf/80151833.pdf" target="_blank">Medical biology</a></p>
                                        <p><a href="https://textbookequity.org/Textbooks/collegebiologysummaryquestions.pdf">College Biology</a></p>
                                        <p><a href="https://www.umsl.edu/~philo/files/McGinnis%20Works/Physics%20translation/Physics-vol.1.pdf" target="_blank">T H E P H Y S I C S OF THE HEALING</a></p>
                                        <p><a href="https://web.pdx.edu/~pmoeck/books/Tipler_Llewellyn.pdf" target="_blank">Modern Physics</a></p>
                                        <p><a href="https://webhome.phy.duke.edu/~rgb/Class/intro_physics_1/intro_physics_1.pdf" target="_blank">Introductory Physics</a></p>
                                        <p><a href="https://elearn.daffodilvarsity.edu.bd/pluginfile.php/987150/mod_label/intro/fundamentals-of-physics-textbook.pdf" target="_blank">Fundamentals of Physics Extended, 10th Edition</a></p>
                                        <p><a href="https://fiisikis.weebly.com/uploads/5/4/9/3/54939617/for_the_love_of_physics.pdf" target="_blank">For the Love of Physics</a></p>
                                        <p><a href="https://delibra.bg.polsl.pl/Content/39163/BCPS_43080_1945_A-text-book-" target="_blank">A TEXT BOOK OF PHYSICS</a></p>
                                        <p><a href="https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/UniversityPhysicsVolume1-LR.pdf" target="_blank">University Physics Volume 1</a></p>
                                        <p><a href="https://www.fisica.net/mecanicaclassica/new" target="_blank">Newtonian Physics</a></p>
                                        <p><a href="https://elearning.reb.rw/pluginfile.php/5657/mod_resource/content/2/S1%20Physics%20SB.pdf" target="_blank">Physics For Rwanda Schools</a></p>
                                        <p><a href="https://web.ung.edu/media/Chemistry2/Chemistry-LR.pdf" target="_blank">Chemistry</a></p>
                                        <p><a href="https://2012books.lardbucket.org/pdfs/beginning-chemistry.pdf" target="_blank">Beginning Chemistry</a></p>
                                        <p><a href="https://resources.saylor.org/wwwresources/archived/site/textbooks/General%20Chemistry%20Principles,%20Patterns,%20and%20Applications.pdf" target="_blank">General Chemistry Principles, Patterns, and Applications</a></p>
                                        <p><a href="https://edisciplinas.usp.br/pluginfile.php/4557662/mod_resource/content/1/CRC%20Handbook%20of%20Chemistry%20and%20Physics%2095th%20Edition.pdf" target="_blank">CRC Handbook of Chemistry and Physics 95th Edition</a></p>
                                        <p><a href="https://www.dimanregional.org/site/handlers/filedownload.ashx?moduleinstanceid=10074&dataid=6451&FileName=Holt%20Chemistry%20Textbook.pdf" target="_blank">Chemistry</a></p>
                                        <p><a href="https://mkimia.fst.unair.ac.id/wp-content/uploads/2018/04/Ira-Levine-Physical-Chemistry-6th-edition-McGraw-Hill-Science_Engineering_Math-2008.pdf" target="_blank">Physical Chemistry</a></p>
                                        <p><a href="https://industri.fatek.unpatti.ac.id/wp-content/uploads/2019/03/046-Basic-Concepts-of-Chemistry-Leo-J.-Malone-Theodore-Dolter-Edisi-8-2008.pdf" target="_blank">Basic Concepts of Chemistry</a></p>
                                        <p><a href="http://www.rnlkwc.ac.in/pdf/study-material/chemistry/Peter_Atkins__Julio_de_Paula__Physical_Chemistry__1_.pdf" target="_blank">ATKINS' PHYSICAL CHEMISTRY</a></p>
                                        <p><a href="https://www.gbcramgarh.in/e-learning-study-materials/chem/Principle%20of%20Physical%20chemistry%20by%20Puri%20Sharma%20Pathania%20(z-lib.org)%20(1).pdf" target="_blank">Principle of Physical chemistry by Puri Sharma Pathania</a></p>
                                        <p><a href="http://uhl.iitmandi.ac.in/uhlclassroom/uploads/J.D._Lee%20_Concise_Inorganic_Chemistry_(4th_Edition).pdf" target="_blank">Concise Inorganic Chemistry</a></p>`
};

function societyLibrary() {
  document.body.innerHTML = `${libraryNav}<br><br><p><a href="https://assets.openstax.org/oscms-prodcms/media/documents/IntroductiontoSociology3e-WEB_TZsroiv.pdf" target="_blank">Introduction to Sociology</a></p>
                                            <p><a href="https://www.cartercenter.org/resources/pdfs/health/ephti/library/lecture_notes/health_science_students/ln_sociology_final.pdf" target="_blank">Introduction to Sociology</a></p>
                                            <p><a href="http://elibrary.clce.ac.zm:8080/jspui/bitstream/123456789/53/1/sociology_textbook.pdf" target="_blank">A TEXT-BOOK OF SOCIOLOGY</a></p>
                                            <p><a href="https://rgu.ac.in/wp-content/uploads/2021/02/Download_636.pdf" target="_blank">INTRODUCTION TO SOCIOLOGY</a></p>
                                            <p><a href="https://www.tnteu.ac.in/pdf/library/11%20The_basics_of_sociology.pdf" target="_blank">THE BASICS OF SOCIOLOGY</a></p>
                                            <p><a href="https://ccsuniversity.ac.in/bridge-library/pdf/Sociological_Theory%20Ritzer.pdf" target="_blank">Sociological Theory</a></p>
                                            <p><a href="https://www.shortcutstv.com/text/giddens5th.pdf" target="_blank">Sociology</a></p>
                                            <p><a href="http://www.sociology.org.uk/sctvpdf/Essentials_of_Sociology.pdf" target="_blank">Essentials of Sociology</a></p>
                                            <p><a href="https://www.unodc.org/pdf/criminal_justice/Handbook_on_police_Accountability_Oversight_and_Integrity.pdf" target="_blank">Handbook on police accountability, oversight and integrity</a></p>
                                            <p><a href="https://www.ciddd.ca/documents/exhibits/P-0624.pdf" target="_blank">USE OF FORCE</a></p>
                                            <p><a href="https://www.ohchr.org/sites/default/files/Documents/ProfessionalInterest/UseOfForceAndFirearms.pdf" target="_blank">Resource book on the use of force and firearms in law enforcement</a></p>
                                            <p><a href="https://www.ojp.gov/pdffiles1/87616.pdf" target="_blank">POLICE USE OF DEADLY FORCE</a></p>
                                            <p><a href="https://portal.cops.usdoj.gov/resourcecenter/RIC/Publications/cops-p173-pub.pdf" target="_blank">Reducing Fear of Crime Strategies for Police</a></p>
                                            <p><a href="https://www.osce.org/files/f/documents/8/4/32547_0.pdf" target="_blank">Police Public Partnerships</a></p>
                                            <p><a href="https://www.amnesty.nl/content/uploads/2017/01/book_1_0.pdf" target="_blank">UNDERSTANDING POLICING</a></p>
                                            <p><a href="https://portal.cops.usdoj.gov/resourcecenter/ric/Publications/cops-w0875-pub.pdf" target="_blank">Law Enforcement Best Practices: Lessons Learned from the Field</a></p>
                                            <p><a href="http://www.untag-smd.ac.id/files/Perpustakaan_Digital_2/PUBLIC%20POLICY%20(Public%20Administration%20and%20public%20policy%20133)%20Handbook%20of%20police%20administration.pdf" target="_blank">PUBLIC ADMINISTRATION AND PUBLIC POLICY</a></p>
                                            <p><a href="https://electricscotland.com/history/SAS-Self-Defense-Handbook.pdf" target="_blank">The SAS Self Defense Handbook ( John Lofty Wiseman)</a></p>
                                            <p><a href="https://www.iow.gov.uk/azservices/documents/2716-The-Fire-Prevention-Handbook.pdf" target="_blank">The Fire Prevention Handbook</a></p>
                                            `
};

function technologyLibrary() {
  document.body.innerHTML = `${libraryNav}<br><br>  <p><a href="https://edisciplinas.usp.br/pluginfile.php/4210376/mod_resource/content/1/Brian%20Arthur-The%20nature%20of%20technology-2009.pdf" target="_blank">The Nature of Technology</a></p>
                                                <p><a href="https://bordeure.files.wordpress.com/2008/11/the-economist-future-of-technology.pdf" target="_blank">THE FUTURE OF TECHNOLOGY</a></p>
                                                <p><a href="https://itacademic.ir/upload/IT_Fund.&Infra-1.pdf" target="_blank">Fundamentals of Information Technology</a></p>
                                                <p><a href="http://hozekf.oerp.ir/sites/hozekf.oerp.ir/files/kar_fanavari/manabe%20book/secondary/INTERNATIONAL%20HANDBOOK%20OF%20INFORMATION%20TECHNOLOGY%20IN%20PRIMARY%20AND%20SECONDARY%20EDUCATION.pdf" target="_blank">INTERNATIONAL HANDBOOK OF INFORMATION TECHNOLOGY IN PRIMARY AND SECONDARY EDUCATION</a></p>
                                                <p><a href="https://www.uky.edu/~gmswan3/777/IS_Book.pdf" target="_blank">Information Systems</a></p>
                                                <p><a href="https://bristoluniversitypress.co.uk/asset/9607/science-technology-and-society-catalogue.pdf" target="_blank">Science technology and society</a></p>
                                                <p><a href="https://www.mnfea.com/resources/Documents/Social%20Media%20for%20Events.pdf" target="_blank">Social Media for Events</a></p>
                                                <p><a href="https://people.engr.tamu.edu/guni/csce421/files/AI_Russell_Norvig.pdf" target="_blank">Artificial Intelligence A Modern Approach</a></p>
                                                <p><a href="https://courses.csail.mit.edu/6.034f/ai3/rest.pdf" target="_blank">Artificial Intelligence / Patrick Henry Winston</a></p>
                                                <p><a href="https://terrorgum.com/tfox/books/artificialintelligenceinthe21stcentury.pdf" target="_blank">Artificial Intelligence in the 21st Century</a></p>
                                                <p><a href="https://alex.smola.org/drafts/thebook.pdf" target="_blank">INTRODUCTION TO MACHINE LEARNING</a></p>
                                                <p><a href="https://web.mit.edu/6.001/6.037/sicp.pdf" target="_blank">Structure and Interpretation of Computer Programs, 2nd ed</a></p>`
};

