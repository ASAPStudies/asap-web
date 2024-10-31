import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import FAQ from '../../utils/declarations/app.types';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  standalone: true,
  imports: [RouterLink],
})
export class FaqsComponent {
  constructor() {}

  ngOnInit() {
    this.showAllFaqs();
  }
  isAllFaqs: boolean = false;
  filteredFaqs: { question: string; description: string }[] = [];

  showAllFaqs() {
    if (this.isAllFaqs) {
      this.filteredFaqs = this.faqs;
      return;
    }

    this.filteredFaqs = this.faqs.slice(0, 5);
  }

  faqs: { question: string; description: string }[] = [
    {
      question: 'What is ASAP?',
      description:
        'ASAP, which stands for Academic Special Assistant Portal, is an innovative eLearning center designed to provide students with on-demand tutoring and academic assistance. Our platform offers access to qualified tutors 24/7, helping you with assignments, projects, research, and more.',
    },
    {
      question: 'How does ASAP work?',
      description:
        'ASAP offers a user-friendly interface where you can post your questions or schedule live tutoring sessions. You can choose between one-on-one or group sessions with expert tutors. Our tutors are available to guide you through complex concepts and provide quick solutions to your academic challenges.',
    },
    {
      question: 'Who are the tutors on ASAP?',
      description:
        'Our tutors are experienced lecturers and subject matter experts who excel in their respective fields. We carefully select tutors based on their expertise and teaching abilities. The platform is self-rated, ensuring tutors are evaluated based on customer satisfaction, guaranteeing accurate and helpful answers.',
    },
    {
      question: 'What subjects and topics does ASAP cover?',
      description:
        "ASAP covers a wide range of subjects, from mathematics and science to humanities and specialized areas. Our tutors can assist you with research, assignments, projects, and more. If you're uncertain, feel free to ask, and we'll do our best to provide the support you need.",
    },
    {
      question: 'Is ASAP suitable for all academic levels?',
      description:
        'Yes, ASAP caters to students of all academic levels, from high school to university and beyond. Our personalized approach ensures that each student receives tailored assistance that aligns with their learning needs and goals.',
    },
    {
      question: 'How do I schedule a tutoring session?',
      description:
        'Scheduling a tutoring session is easy! Log in to your ASAP account, choose the subject you need help with, and select a convenient time for your session. You can also opt for immediate assistance by posting a question, and a tutor will respond promptly.',
    },
    {
      question: 'Can I choose my tutor?',
      description:
        "No, any available tutor can answer your questions or accept your tutoring session request. We have a team of qualified tutors who are ready to assist you based on their expertise and availability. You'll have the opportunity to connect with a knowledgeable tutor who can best address your academic needs.",
    },
    {
      question: 'What if I miss a scheduled session?',
      description:
        'If you miss a scheduled session, you can reschedule or choose another available time that suits you. Additionally, some sessions may be recorded, allowing you to review the content at a later time.',
    },
    {
      question: 'Is there a cost associated with using ASAP?',
      description:
        "Yes, there is a fee for accessing ASAP's tutoring services. We offer different pricing options to suit your needs. You can find detailed pricing information on the platform.",
    },
    {
      question: 'How do I ensure the quality of tutoring on ASAP?',
      description:
        'ASAP maintains a high standard of tutoring quality by employing expert tutors and using a self-rating system based on customer satisfaction. This ensures that tutors consistently provide accurate and helpful assistance.',
    },
    {
      question: 'Can ASAP help with long-term projects and research?',
      description:
        'Absolutely! ASAP is here to support you throughout your academic journey. Our tutors can assist with long-term projects, research, and assignments, making your academic tasks more manageable.',
    },
    {
      question: 'What technology do I need to use ASAP?',
      description:
        "To use ASAP, you'll need a device with internet access and a web browser. Our platform is designed to be user-friendly, so you don't need any specialized software or equipment.",
    },
    {
      question: 'How do I contact customer support?',
      description:
        "If you have any questions or need assistance, you can reach our customer support team through the contact information provided on our website. We're here to help you make the most of your ASAP experience.",
    },
    {
      question: 'How does ASAP ensure academic honesty?',
      description:
        'ASAP is committed to upholding academic integrity by fostering a collaborative environment. Our tutors work closely with students, guiding them through their projects while encouraging active engagement in finding solutions. Furthermore, we employ vigilant monitoring of all platform interactions to ensure strict adherence to our policies and guidelines.',
    },
    {
      question:
        'What steps do you take to guarantee the safety of users on the ASAP eLearning platform?',
      description:
        'Your safety is our top priority at ASAP. We have implemented comprehensive measures to provide a secure and reliable environment for all users. Cutting-edge encryption protocols are utilized to protect your personal and financial data. Moreover, we maintain rigorous policies to prevent any instances of plagiarism, ensuring that the content and assistance you receive are both genuine and authentic.',
    },
  ];
  selectedFaq: { question: string; description: string } | null = null;
  isExpand: boolean = false;
  toggleFAQ(faq: { question: string; description: string } | null) {
    this.selectedFaq = faq;
  }
}
