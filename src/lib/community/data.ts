export type Vote = 'yes' | 'no';
export type Member = { id: string; name: string; handle: string; initials: string; color: string; baseYes: number; helpfulComments: number; bio: string };
export type Comment = { id: string; postId: string; author: string; text: string; yes: number; no: number; likes: number };
export type Post = { id: string; author: string; community: string; title: string; text: string; time: string; votes: number; comments: number; image?: boolean; tag?: string; tags?: string[]; link?: string; attachment?: string };
export const members: Member[] = [
 {id:'sam',name:'Sam Chen',handle:'codewizard',initials:'SC',color:'blue',baseYes:1260,helpfulComments:142,bio:'Making complex things a little simpler. Software engineer & lifelong learner.'},
 {id:'alex',name:'Alex Morgan',handle:'alexbuilds',initials:'AM',color:'green',baseYes:1096,helpfulComments:118,bio:'Building things, asking questions, and learning along the way.'},
 {id:'jules',name:'Jules Parker',handle:'designthinker',initials:'JP',color:'pink',baseYes:924,helpfulComments:96,bio:'Designer. Big believer in thoughtful little details.'},
 {id:'mia',name:'Mia Wilson',handle:'learnwithmia',initials:'MW',color:'orange',baseYes:803,helpfulComments:84,bio:'Sharing what I learn, one day at a time.'},
 {id:'dan',name:'Daniel Lee',handle:'techmentor',initials:'DL',color:'blue',baseYes:702,helpfulComments:76,bio:'Here to help the next generation of builders.'},
 {id:'nina',name:'Nina Patel',handle:'ninacreates',initials:'NP',color:'pink',baseYes:586,helpfulComments:65,bio:'A curious mind with a creative streak.'},
 {id:'leo',name:'Leo Martinez',handle:'leocodes',initials:'LM',color:'green',baseYes:512,helpfulComments:58,bio:'Learning in public.'},
 {id:'ava',name:'Ava Thompson',handle:'avastudies',initials:'AT',color:'orange',baseYes:438,helpfulComments:49,bio:'Small steps, big ideas.'},
];
export const posts: Post[] = [
 {id:'debugging',author:'leo',community:'Programming',title:'What’s the one programming habit you wish you’d learned earlier?',text:'I’ve been coding for about a year now, and I’m realizing the small habits matter more than the tools. What’s something that genuinely changed the way you write code?',time:'2h ago',votes:128,comments:32,tag:'Discussion'},
 {id:'career',author:'mia',community:'Career Advice',title:'Made the switch from marketing to UX design. Here’s what actually helped.',text:'Six months ago I was staring at a blank portfolio, wondering if it was too late to start over. Today I signed my first offer. A few honest lessons from the journey…',time:'3h ago',votes:96,comments:24,tag:'Career story'},
 {id:'workspace',author:'nina',community:'Design',title:'A little workspace refresh, a lot more creative energy ✨',text:'Finally gave my desk some love. Amazing what a little sunlight, a plant, and a fresh sketchbook can do. What does your creative corner look like?',time:'4h ago',votes:214,comments:46,image:true,tag:'Show & tell'},
 {id:'study',author:'ava',community:'Student Life',title:'How do you stay focused when everything feels like a distraction?',text:'Finals are around the corner and my screen time is… not great. Looking for practical study routines that actually stick. What works for you?',time:'5h ago',votes:73,comments:19,tag:'Question'},
 {id:'technology',author:'dan',community:'Technology',title:'What’s a small piece of technology that made your everyday life better?',text:'Not the shiny new phone — the little things. A clever app, a simple automation, or a tool you now can’t live without. Let’s share some underrated favorites.',time:'6h ago',votes:62,comments:17,tag:'Discussion'},
];
export const initialComments: Comment[] = [
 {id:'c1',postId:'debugging',author:'sam',text:'Try breaking the problem into smaller functions first. It makes debugging much easier, and you can test each part separately. Small, focused functions have saved me more time than any fancy tool.',yes:24,no:2,likes:36},
 {id:'c2',postId:'debugging',author:'jules',text:'Naming things clearly! A good variable name is a tiny piece of documentation. Future you (and your teammates) will thank you for making the intent obvious.',yes:18,no:1,likes:27},
 {id:'c3',postId:'debugging',author:'mia',text:'Read the error message before changing anything. I used to panic and try random fixes. Now I slow down, reproduce the issue, and change one thing at a time.',yes:12,no:0,likes:19},
];
export const communities = [
 {name:'Technology',symbol:'Cpu',color:'blue',description:'The ideas and innovations shaping what’s next.',members:'28.4k'},
 {name:'Programming',symbol:'Code',color:'green',description:'Build, debug, and grow together. All skill levels welcome.',members:'42.8k'},
 {name:'Career Advice',symbol:'Briefcase',color:'orange',description:'Find your next step with people who’ve been there.',members:'18.6k'},
 {name:'Student Life',symbol:'GraduationCap',color:'blue',description:'Study tips, campus stories, and a little encouragement.',members:'24.2k'},
 {name:'Design',symbol:'Palette',color:'pink',description:'A home for creative minds and thoughtful details.',members:'16.3k'},
 {name:'Science',symbol:'FlaskConical',color:'green',description:'Stay curious. Explore the wonders of our world.',members:'12.7k'},
 {name:'Gaming',symbol:'Gamepad2',color:'orange',description:'Good games, great conversations, better teammates.',members:'31.5k'},
 {name:'Personal Development',symbol:'Sprout',color:'green',description:'Small habits and meaningful progress, together.',members:'21.1k'},
];
export function commentCounts(comment: Comment, votes: Record<string, Vote>) { return {yes:comment.yes + (votes[comment.id] === 'yes' ? 1 : 0),no:comment.no + (votes[comment.id] === 'no' ? 1 : 0)}; }
export function memberTotal(member: Member, comments: Comment[], votes: Record<string, Vote>) { return member.baseYes + comments.filter(c => c.author === member.id).reduce((sum,c) => sum + commentCounts(c,votes).yes,0); }
export function setHelpfulVote(votes: Record<string, Vote>, id: string, vote: Vote) { return {...votes,[id]:vote}; }
export function rankedMembers(comments: Comment[], votes: Record<string, Vote>) { return [...members].sort((a,b)=>memberTotal(b,comments,votes)-memberTotal(a,comments,votes)); }
