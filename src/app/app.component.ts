import { Component } from '@angular/core';
import { Project } from './shared/modules/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './shared/services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Portfolio';
  value: number = 0;
  mainLanguages: any[] = [];
  languages: any[] = [];
  education: any[] = [];
  experience: any[] = [];
  proj: Project[] = [];
  infoMsg: any[] = [];
  gitLink = 'https://github.com/danifaus89/';
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    companyName: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    msg: new FormControl(''),
  });
  submitted: boolean = false;
  showLoader: boolean = false;

  constructor(private cs: ContactService) {}
  ngOnInit(): void {
    this.initProgressBar();
    this.initTimeLine();
    this.initProjects();
    this.initForm();
  }

  inView(element: any) {
    element.scrollIntoView({
      behaviour: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  downloadMyFile() {
    let link = document.createElement('a');
    link.download = 'cv';
    link.href = 'assets/files/CV.pdf';
    link.click();
    link.remove();
  }
  goToGit(repoName: string) {
    window.open(this.gitLink + repoName);
  }
  initProgressBar() {
    this.mainLanguages = [
      { title: 'Angular', progress: 80 },
      { title: 'Typescript', progress: 70 },
      { title: 'HTML5', progress: 85 },
    ];
    this.languages = [
      { title: 'Rxjs', progress: 65 },
      { title: 'Javascript', progress: 70 },
      { title: 'Node Js', progress: 60 },
      { title: 'Express', progress: 50 },
      { title: 'MongoDb', progress: 50 },
      { title: 'CSS3', progress: 65 },
      { title: 'Java', progress: 20 },
      { title: 'C#', progress: 50 },
      { title: 'Bootstrap', progress: 85 },
      { title: 'PrimeNg', progress: 80 },
      { title: 'Angular Material', progress: 65 },
    ];
  }
  initTimeLine() {
    this.education = [
      {
        date: '2017 - 2019',
        title: 'CFGS de Desarrollo Aplicaciones Web (DAW)',
        tagline: 'IES Domènech i Montaner',
      },
      {
        date: '2012 - 2015',
        title: 'CFGS de Automoción',
        tagline: 'IES Pere Martell',
      },
      {
        date: '2005 - 2008',
        title: 'CFGM Equipos Electrónicos de Consumo',
        tagline: 'IES Domènech i Montaner',
      },
    ];
    this.experience = [
      {
        date: '2020 - 2023',
        title: 'Programador Front-End',
        company: 'T-Systems Iberia',
      },
      {
        date: '2019 - 2020',
        title: 'FCT de Desarrollo Aplicaciones Web en ',
        company: 'Cashmasternet',
      },
      {
        date: '2006 - 2019',
        title: 'Eventos nocturnos',
        company: '',
      },
      {
        date: '2015 - 2018',
        title: 'Sector Automotriz',
        company: '',
      },
    ];
  }
  initProjects() {
    this.proj = [
      {
        title: 'MovieApp',
        icon: '',
        description:
          'This is an app to discover movies and series. And how i did it (In develop)',
        link: 'movieApp.git',
        img: '../assets/img/projectsImg/movieAppImg.jpg',
      },
      {
        title: 'Bank Account Manager Web App',
        icon: '',
        description:
          'It is an application to manage our bank accounts. And how i did it (In develop)',
        link: 'Bank-Account-Manager-Web-App.git',
        img: '../assets/img/projectsImg/gestorAppImg.jpg',
      },
      {
        title: 'Heavyfy',
        icon: '',
        description:
          'This is an app that only fetch rock, heavy-metal and related genres. And how i did it (In develop)',
        link: 'HeavyFi.git',
        img: '../assets/img/projectsImg/heavyfyAppImg.jpg',
      },
      {
        title: 'Portfolio',
        icon: '',
        description: 'This is my portfolio. And how i did it',
        link: 'Portfolio.git',
        img: '../assets/img/projectsImg/portfolioImg.png',
      },
      {
        title: 'RestServerTemplate',
        icon: '',
        description:
          'This is a Node.js rest server template. And how i did it (In develop)',
        link: 'RestServerTemplate.git',
        img: '../assets/img/projectsImg/nodeservertemplate.jpg',
      },
    ];
  }
  initForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      companyName: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]),
      msg: new FormControl('', [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(500),
      ]),
    });
  }
  onSubmit(): void {
    this.submitted = true;

    if (!this.contactForm.invalid) {
      this.showLoader = true;
      let form = this.contactForm.value;
      this.infoMsg = [
        {
          icon: 'sucess',
          title: 'Your message has been sent successfully',
        },
        {
          icon: 'error',
          title: 'Your message could not be sent',
        },
      ];
      console.log(form);
      //this.cs.sendEmail(form);
      this.showLoader = false;
      this.onReset();
      /*this.cs.sendMessage(form).subscribe(
        (response) => {
          location.href = 'https://mailthis.to/confirm';
          this.showLoader = false;
          this.onReset();
          this.mailNotification(this.infoMsg[0]);
        },
        (error) => {
          this.mailNotification(this.infoMsg[1]);
          this.showLoader = false;
          this.scrollToTop();
          console.warn(error.responseText);
        }
      );*/
    }
    return;
  }
  onReset(): void {
    this.submitted = false;
    this.contactForm.reset();
  }
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }
  get f() {
    return this.contactForm.controls;
  }
}
