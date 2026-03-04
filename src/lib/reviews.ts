import type { Review } from "@/types";

export const REVIEWS: Review[] = [
	{
		id: "1",
		name: "Stephanie Herrera",
		rating: 5,
		text: "Stephen did an amazing job cleaning my husband's guns. They look brand new! He was very professional and knowledgeable. We will definitely be back!",
		source: "Google",
		date: "2024-01-15",
	},
	{
		id: "2",
		name: "Vicki L",
		rating: 5,
		text: "Stephen is great! He cleaned two of my handguns and they came back looking and functioning like new. Very reasonable prices and quick turnaround. Highly recommend!",
		source: "Google",
		date: "2024-02-20",
	},
	{
		id: "3",
		name: "Jill R",
		rating: 5,
		text: "Excellent service! Stephen cleaned my carry gun and it looks and shoots like new. Fast turnaround and very fair pricing. I will be a repeat customer for sure.",
		source: "Yelp",
		date: "2024-03-10",
	},
	{
		id: "4",
		name: "Mike Thompson",
		rating: 5,
		text: "Had my AR-15 and Glock 19 cleaned here. Both came back spotless. Stephen really knows his stuff — former Army and it shows in his attention to detail.",
		source: "Google",
		date: "2024-04-05",
	},
	{
		id: "5",
		name: "David Martinez",
		rating: 5,
		text: "Best gunsmith in the Valley! Stephen installed my red dot sight perfectly and even helped me zero it. Great prices and outstanding work. Five stars!",
		source: "Google",
		date: "2024-05-18",
	},
	{
		id: "6",
		name: "Sarah K",
		rating: 5,
		text: "Very impressed with the Pro Cleaning service. My shotgun hasn't been cleaned in years and Stephen made it look factory new. The ultrasonic cleaning really works!",
		source: "Google",
		date: "2024-06-22",
	},
	{
		id: "7",
		name: "Robert Wilson",
		rating: 5,
		text: "Stephen replaced my trigger on my Glock and the difference is night and day. Professional work, fair price, and done same day. Doesn't get better than that.",
		source: "Yelp",
		date: "2024-07-30",
	},
	{
		id: "8",
		name: "James Chen",
		rating: 5,
		text: "Took my rifle in for a basic cleaning and Stephen had it done in no time. $25 for a professional cleaning is a steal. The shop inside C2 Tactical is super convenient too.",
		source: "Google",
		date: "2024-08-14",
	},
];

export const CLEANING_REVIEWS = REVIEWS.filter((r) =>
	["Stephanie Herrera", "Vicki L", "Jill R"].includes(r.name),
);
