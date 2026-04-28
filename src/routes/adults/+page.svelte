<script lang="ts">
	import MinistryPage from '$lib/components/design/MinistryPage.svelte';
	import type { MinistryPageContent } from '$lib/types/ministry-page';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const content: MinistryPageContent = {
		hero: {
			title: 'Adult Ministries',
			subtitle:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
		},
		bannerImage: {
			url: 'https://plus.unsplash.com/premium_photo-1668197656968-30938b40e7c3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			altText: 'Calvary adults gathered in worship and fellowship'
		},
		intro: {
			title: 'Welcome to Calvary',
			body: `<p>Calvary is a community of people making a journey with each other in following Jesus. That is the heart behind all we do – every ministry, every structure, every program, class, service, or event – we are here seeking to make a place where people can come and meet with God. May this be a place where you and I can encounter our Maker, praise our Father, surrender to our Master, and love the Lord our God with all our heart, and mind, and soul, and strength.</p><p>Have you found your place to help you in your journey? You are welcome to join us as we seek to follow God together.</p>`
		},
		feature: {
			title: 'Special Event',
			image: {
				url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				altText: 'Adults in fellowship'
			},
			direction: 'tl',
			body: `<p>Welcome to our exclusive annual event! Join us for an unforgettable experience filled with excitement, entertainment, and inspiration. Get ready to be part of something extraordinary and create lasting memories with us. Save the date and stay tuned for more details!</p>`,
			cta: { label: 'Register Here', href: '/contact' }
		},
		programs: {
			title: 'How To Get Involved',
			intro:
				'We are here seeking to make a place where people can come and meet with God. There are many ways that we serve the Lord and steward the influence he gives us. Click the links below to learn more about the different ways you can get connected.',
			items: [
				{
					id: 'discover-calvary',
					label: 'Discover Calvary Classes',
					body: `<p>Discover Calvary is a six-week class, offered three times a year, which chronicles our journey with the Lord. This course explores our vision and values, our practices and philosophies, and our calling and destiny in the Lord. We are a people on mission with Jesus. These classes are a great way to find out about Calvary and explore what it means to be a part of this faith community. Discover Calvary is one part of the process of becoming a member at Calvary.</p>`
				},
				{
					id: 'journey-groups',
					label: 'Journey Groups',
					body: `<p>Journey Groups are the heartbeat of Calvary. Our vision calls us to express true Christian community. What does that mean? First, God is building us into a place where He dwells (Ephesians 2:19-22). We want God to feel at home in us. Second, we want to grow in our capacity for authenticity (1 John 1:7). That means we are growing in our ability to be open and honest with others in a safe place. Third, we want to practice being a community where our attachment with the Lord and others fuels our joy, which empowers godly living (Numbers 6:22-26; John 15:9-12). Fourth, Journey Groups are one of the primary places where we minister to and care for one another as a body (James 5:16).</p>`
				},
				{
					id: 'adult-bible-study',
					label: 'Adult Bible Study',
					body: `<p>Whether you are just getting started with the Bible or have read it for decades, our Bible Studies create opportunities of fellowship, focused conversation, and life application. These studies are also intended to help understand who God is and what God is doing in our lives, which equips us for godly service to one another and the world.</p>`
				},
				{
					id: 'his-delight',
					label: "His Delight Ladies' Ministry",
					body: `<p>This is an invitation for the Calvary ladies to come as we creatively communicate Jesus' heart. As women of Calvary, we are called to partner with Jesus in the restoration of things lost in people's lives. Ezekiel 36:25-27 shows us that God makes us holy. The ladies' ministry provides a meeting night, prayer room, Bible studies, annual conference, retreats and more.</p>`
				},
				{
					id: 'serve-locally-globally',
					label: 'Serve Locally &amp; Globally',
					body: `<p>God used Calvary to plant many churches – feeding children, training up leaders, giving Bibles, bringing hope to widows, prisoners, and orphanages. Calvary continues to serve globally through partnerships with ministries in India, Middle East, Africa, Central and South America. Locally, we partner with and serve organizations as the Lord leads and guides us.</p>`
				},
				{
					id: 'prayer-room',
					label: 'Prayer Room',
					body: `<p>Prayer transforms the life of a believer. At the Prayer Room of Calvary, we want to bring to you opportunities for you to experience the presence of God, renew your mind, be empowered by His Spirit. The Prayer Room at Calvary is open for all who desire to pray and encounter Jesus. Calvary continues to pursue the Lord through 24/7 prayer in our Prayer Room. Come and join the symphony of prayer with God that is springing forth from the heart of Calvary.</p>`
				},
				{
					id: 'ministry-team-training',
					label: 'Ministry Team Training',
					body: `<p>This specific six-month Academy builds with intensive group interaction. We believe God has called us to equip the saints for the work of the ministry. We are confident that by His wisdom and Spirit we can release a generation of ministers filled with His love who will exercise their God-given calling in power – no matter if God has placed you in the workplace, a university, arts and entertainment, the church or on the mission field.</p>`
				}
			]
		},
		announcements: {
			title: 'Adult Ministry Announcements',
			intro:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
		}
	};
</script>

<MinistryPage {content} announcements={data.announcements} urgent={data.urgent} />
