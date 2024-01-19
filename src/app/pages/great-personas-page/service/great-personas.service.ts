import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreatPersonasService {

 greatPersonas = [
  {
    id: 1,
    fullName: "Tony Robbins",
    name: "Tony",
    nickName: "The Father of Personal Development",
    famousQuote: "The only limit to your impact is your imagination and commitment.",
    personalLife: "Born on February 29, 1960, in North Hollywood, California. Despite facing financial challenges during his youth, Robbins developed a keen interest in personal development. His journey from a struggling teenager to a renowned life coach reflects his resilience and determination. Robbins is married to Sage Robbins, and they share a commitment to philanthropy and empowering individuals worldwide.",
    work: "Renowned life coach, author, and motivational speaker. Robbins has authored best-selling books like 'Awaken the Giant Within' and 'Unlimited Power.' Through his seminars and interventions, he has transformed the lives of millions, imparting strategies for personal and financial success.",
    anegdote: "During one of his seminars, Robbins engaged in a humorous dance-off with an attendee to illustrate the importance of breaking through personal limitations and embracing joy in life.",
    rememberFor: "Empowering millions to achieve personal and financial success.",
    img: "assets/images/great-personas/Tony_Robbins.jpg"
  },
  {
    id: 2,
    fullName: "Mahatma Gandhi",
    name: "Mahatma",
    nickName: "Father of the Nation",
    famousQuote: "Be the change that you wish to see in the world.",
    personalLife: "Born on October 2, 1869, in Porbandar, British India. Gandhi came from a modest background and married Kasturba at the age of 13. Known for his ascetic lifestyle, he experimented with vegetarianism and embraced simplicity. His commitment to truth and nonviolence, or 'Satyagraha,' was deeply influenced by his spiritual beliefs.",
    work: "Leader of the Indian independence movement against British rule. Gandhi's philosophy of nonviolent resistance inspired movements for civil rights and freedom across the world. He played a crucial role in negotiating India's independence and advocating for social reforms.",
    anegdote: "Gandhi, famous for his frugal lifestyle, once gave away his sandals to a fan who admired them, walking barefoot afterward. This act symbolized his commitment to humility and simplicity.",
    rememberFor: "Leading India to independence through peaceful resistance.",
    img: "assets/images/great-personas/Mahatma_Gandhi.jpg"
  },
  {
    id: 3,
    fullName: "Nelson Mandela",
    name: "Nelson",
    nickName: "Madiba",
    famousQuote: "Education is the most powerful weapon which you can use to change the world.",
    personalLife: "Born on July 18, 1918, in Mvezo, South Africa. Mandela faced adversity during his early years, growing up in the Thembu royal family. His commitment to justice led him to study law, and he became involved in anti-apartheid activism. Mandela was married three times and had six children.",
    work: "Anti-apartheid revolutionary and former President of South Africa. Mandela's leadership in the African National Congress (ANC) marked a turning point in the fight against racial segregation. He spent 27 years in prison before becoming South Africa's first black president.",
    anegdote: "During his imprisonment on Robben Island, Mandela secretly taught fellow inmates Shakespeare to maintain their spirits and intellectual engagement.",
    rememberFor: "Ending apartheid and establishing a multiracial democracy in South Africa.",
    img: "assets/images/great-personas/Nelson_Mandela.jpg"
  },
  {
    id: 4,
    fullName: "Epictetus",
    name: "Epictetus",
    nickName: "",
    famousQuote: "We cannot choose our external circumstances, but we can always choose how we respond to them.",
    personalLife: "Born in Hierapolis, Phrygia, c. 50 AD. Little is known about Epiktet's personal life, but historical records suggest he was born into slavery. Despite his humble beginnings, he later became a prominent Stoic philosopher, emphasizing the importance of personal agency and virtue in the face of adversity.",
    work: "Stoic philosopher known for his teachings on ethics and personal development. Epiktet's discourses, transcribed by his student Arrian, delve into practical wisdom and resilience. His philosophy has had a lasting impact on Stoicism and continues to inspire individuals seeking inner strength.",
    anegdote: "Legend has it that when Epiktet was once criticized for being lame, he responded with humor, saying, 'It is you who are lame in soul.' This witty retort reflects his ability to maintain composure in challenging situations.",
    rememberFor: "Contributions to Stoic philosophy and wisdom on personal resilience.",
    img: "assets/images/great-personas/Epictetus.jpg"
  },
  {
    id: 5,
    fullName: "Marcus Aurelius",
    name: "Marcus",
    nickName: "",
    famousQuote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    personalLife: "Born on April 26, 121 AD, in Rome, Italy. Marko Aurelije was adopted by Emperor Antoninus Pius, providing him with a privileged upbringing. Despite facing the challenges of political life, he maintained a stoic and philosophical approach, finding solace in the teachings of Stoicism.",
    work: "Roman Emperor and Stoic philosopher. Marko Aurelije's reign as emperor was marked by his dedication to Stoic principles and a commitment to justice. His 'Meditations,' a series of personal writings, reflects his introspective and philosophical nature.",
    anegdote: "During military campaigns, Marko Aurelije is said to have slept on the bare ground and shared the soldiers' hardships, reinforcing his commitment to humility and understanding the human experience.",
    rememberFor: "Philosophical reflections on life, leadership, and virtue.",
    img: "assets/images/great-personas/Marcus_Aurelius.jpg"
  },
  {
    id: 6,
    fullName: "Martin Luther King Jr.",
    name: "Martin",
    nickName: "MLK",
    famousQuote: "I have a dream...",
    personalLife: "Born on January 15, 1929, in Atlanta, Georgia, USA. Martin Luther King Jr. grew up in a religious family and showed early signs of leadership. His commitment to civil rights and justice was shaped by his Christian faith and the teachings of Mahatma Gandhi.",
    work: "Leader in the American civil rights movement advocating for racial equality. MLK played a pivotal role in the Montgomery Bus Boycott, the March on Washington, and the Southern Christian Leadership Conference. His advocacy for nonviolent resistance and equality transformed the American civil rights landscape.",
    anegdote: "During the Montgomery Bus Boycott, MLK displayed remarkable resilience. His home was bombed, but he addressed the crowd, urging them to follow the path of love and nonviolence, illustrating his unwavering commitment to his principles.",
    rememberFor: "Promoting nonviolent civil disobedience and advancing civil rights.",
    img: "assets/images/great-personas/Martin_Luther_King_Jr.jpg"
  },
  {
    id: 7,
    fullName: "Thomas Jefferson",
    name: "Thomas",
    nickName: "",
    famousQuote: "All men are created equal.",
    personalLife: "Born on April 13, 1743, in Shadwell, Virginia, USA. Thomas Jefferson was a polymath with diverse interests, including science, architecture, and horticulture. A key figure in the American Enlightenment, he married Martha Wayles Skelton and had six children. Despite being a prominent statesman, Jefferson faced financial challenges throughout his life.",
    work: "Founding Father, principal author of the Declaration of Independence, and third U.S. President. Jefferson's political contributions include the Louisiana Purchase and the Lewis and Clark Expedition. As an advocate for individual liberties, he played a crucial role in shaping the early United States.",
    anegdote: "Jefferson was known for his love of books and founded the Library of Congress by selling his personal collection to the government after the original collection was destroyed during the War of 1812.",
    rememberFor: "Contributions to American independence and political philosophy.",
    img: "assets/images/great-personas/Thomas_Jefferson.jpg"
  },
  {
    id: 8,
    fullName: "Marie Curie",
    name: "Marie",
    nickName: "",
    famousQuote: "Nothing in life is to be feared, it is only to be understood.",
    personalLife: "Born on November 7, 1867, in Warsaw, Poland. Marie Curie faced gender-based discrimination but overcame it to become the first woman to win a Nobel Prize. Despite personal tragedy, including the death of her husband, Pierre Curie, she continued her pioneering research and raised two daughters.",
    work: "Physicist and chemist, pioneering research on radioactivity. Marie Curie was the first person to win Nobel Prizes in two different scientific fields. Her discoveries, including radium and polonium, revolutionized the understanding of atomic physics.",
    anegdote: "Curie carried test tubes of radium in her pockets and kept a vial of the element on her desk. Her dedication to research sometimes led to contamination, highlighting her fearless commitment to scientific exploration.",
    rememberFor: "Groundbreaking contributions to science and the first woman professor at the University of Paris.",
    img: "assets/images/great-personas/Marie_Curie.jpg"
  },
  {
    id: 9,
    fullName: "Confucius",
    name: "Confucius",
    nickName: "Kong Fuzi",
    famousQuote: "It does not matter how slowly you go as long as you do not stop.",
    personalLife: "Born on September 28, 551 BC, in Qufu, China. Confucius' early life involved a quest for knowledge and moral development. He married and had children, dedicating his life to teaching and imparting ethical values to future generations.",
    work: "Chinese philosopher and teacher, founder of Confucianism. Confucius' teachings, recorded in the 'Analects,' emphasized the importance of family, respect for elders, and the cultivation of moral virtues. His philosophy became a cornerstone of Chinese culture and governance.",
    anegdote: "Once, a disciple asked Confucius about the key to wisdom. Confucius responded by saying, 'Is it not a pleasure, having learned something, to try it out in practice? Is it not a joy to have friends come from afar? Is it not gentlemanly not to take offense when others fail to appreciate your abilities?' This anecdote reflects Confucius' emphasis on practical wisdom and virtuous living.",
    rememberFor: "Influence on Chinese philosophy, ethics, and traditional thought.",
    img: "assets/images/great-personas/Confucius.jpg"
  }
 ]

  constructor() { }

  //return observable that provides access to data
  // "of" method creates Observable that emits only one value and ends after that
  getGreatPersonas(){
    const observableGreatPersonas = of(this.greatPersonas)

    return observableGreatPersonas
  }

  getPersona(id: number){
    const observablePersona = of(this.greatPersonas.find(persona => persona.id === id))

    return observablePersona
  }
}
