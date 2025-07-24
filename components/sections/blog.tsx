"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { ExternalLink, ChevronLeft, ChevronRight, Search, Calendar, Clock, User } from "lucide-react"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 2,
      title: "The Evolution of Meritocracy: From Strength to Attention",
      excerpt: "Exploring how society's definition of 'merit' has evolved through five distinct stages - from physical strength to attention economy - and what might come next.",
      content: `So I've been thinking about this for a while now, and it's honestly been bugging me. You know how some people were probably killing it 800 years ago, like they were the most respected, smartest people in their community? But if they were doing the exact same thing today, nobody would care. And then it works the other way too - there are people today making millions doing stuff that would've been considered totally pointless back then.

This whole thing got me wondering: how exactly does society decide who deserves what? Like, who gets the money, the respect, the whole package?

**What I Mean by Meritocracy**

Let me just clarify what I'm talking about here. When I say meritocracy, I'm basically talking about how society rewards people - you know, with money, respect, status, all that good stuff. But here's the crazy part: what society thinks is "worthy" of rewards has completely flipped over time.

Think about it this way - if you could time travel and bring someone from 800 years ago to today, they'd be completely lost about why certain people are successful. And if we went back there, we'd probably be just as confused.

**The Stages I've Been Thinking About**

I've been trying to figure out the pattern here, and I think there are roughly 5 stages to this whole thing. I'm still working through this idea, so bear with me.

**Stage 1: It Was All About Being Strong**

Way back in the day, if you were the strongest person in your community, you basically had it made. I'm talking about when people lived in small tribes and communities. If you could fight the best, hunt the best, protect everyone - boom, you got the best food, the best shelter, and yeah, probably your pick of partners too.

Makes sense, right? When survival was literally about not getting eaten by wild animals or killed by other tribes, being physically strong was actually useful. The community needed you, so they took care of you.

**Stage 2: It Became About Who You Knew**

As things got more complicated, just being strong wasn't enough anymore. You needed to be able to talk to people, make deals, build alliances. The person who could get different groups to work together, who could smooth over conflicts - they started getting the rewards.

This is when politics really started becoming a thing. Being able to influence people and build networks became more valuable than just being able to punch hard.

**Stage 3: Money Started Talking**

Then we hit the point where it was all about wealth. Farmers who could grow tons of food, merchants who could trade stuff, craftspeople making valuable things - they became the new VIPs.

And here's where it gets interesting: once you had money, you could get more money. Better tools, better education, better opportunities. It became this whole cycle where the rich got richer, and they stayed at the top.

**Stage 4: Knowledge Became King**

Fast forward to the industrial revolution and beyond - suddenly it was all about what you knew. Scientists, engineers, doctors, all the "smart" jobs became the golden tickets. If you had specialized knowledge or could innovate, society would reward you big time.

This is when everyone started obsessing over education and degrees. Your knowledge basically became your currency.

**Stage 5: Welcome to the Attention Economy**

And now? Now we're living in the weirdest stage yet - it's all about attention.

Here's what's crazy: there are researchers out there making groundbreaking discoveries that could literally change the world, and they're making way less money than people who... well, let's just say people who are really good at getting views and followers.

I'm not saying this is good or bad, it's just what's happening. Society is currently rewarding the ability to grab and keep people's attention more than almost anything else.

**The Whole Entertainment Thing**

This attention economy thing really shows up when you look at entertainers. Back in the day, if you were a dancer, singer, or actor, you were basically there to entertain the rich people. You were like... the hired help for their parties. The wealthy farmers and merchants would pay you to perform, but you were totally dependent on them.

Now? The entertainers ARE the wealthy ones. They don't need patrons anymore - they have millions of followers who pay attention to them, and that attention translates into serious money.

It's wild when you think about it. The whole power structure just flipped.

**Why Does This Keep Changing?**

So what's driving all these shifts? A few things, I think:

Technology keeps changing everything. The internet and social media basically let anyone reach millions of people instantly. That's never been possible before in human history.

The economy keeps evolving too. We went from farming to factories to services, and now to this attention-based thing. Whatever generates economic value gets rewarded.

And honestly, people's behavior changes. We consume different stuff now. We want entertainment, information, experiences. So naturally, the people providing that stuff get rewarded.

**What's Coming Next?**

Here's where it gets really interesting. If we can figure out what comes after this attention thing, we could potentially get ahead of the curve. I'm not saying attention is going away anytime soon - it's probably going to stick around for a while. But there's definitely going to be something after it.

Maybe it'll be about building real trust and authentic connections, since so much online content feels fake now. Or maybe it'll be about actually solving big problems like climate change and inequality. Or it could be something totally different that we can't even imagine yet.

The point is, whatever it is will probably seem weird at first. Just like how making videos or streaming games seemed pointless to older generations, but now people make millions doing it.

**What This Means for Us**

Understanding this pattern is actually pretty useful:

Don't just follow what everyone else is doing right now. Try to think about what skills might be valuable in the next phase.

Focus on being adaptable rather than just optimizing for today's system. The rules keep changing, so the ability to change with them is probably the most valuable skill.

Keep an eye on where society might be heading next. There's probably money to be made in whatever the next big shift is.

And remember that the current system isn't permanent. Just because something is rewarded today doesn't mean it always will be.

**The Bottom Line**

Look, I'm still figuring this all out, and I'm not pretending to have all the answers. But I think there's something here worth thinking about.

The way society decides who gets rewarded has changed dramatically throughout history, and it's going to keep changing. Physical strength gave way to influence, then wealth, then knowledge, and now attention. Something else is coming next.

The people who figure out what that "something else" is going to be - and get good at it early - those are probably going to be the ones society rewards in the future.

It might sound crazy now, just like a lot of today's successful people would have seemed crazy to previous generations. But that's kind of the whole point. The definition of "merit" keeps evolving, and the early adopters of each new phase tend to do pretty well for themselves.

Anyway, that's what I've been thinking about. Still working through all this, but I figured it was worth sharing. What do you think comes next?`,
      author: "Bharath K",
      publishDate: "2025-07-25",
      readTime: "8 min read",
      category: "Social Commentary",
      tags: ["Meritocracy", "Society", "Economics", "History", "Future Trends"],
      featured: true
    },
    {
      id: 1,
      title: "A Hallucination Filter Idea That Might Not Scale—Yet",
      excerpt: "Exploring a potential approach to reduce LLM hallucinations through multi-sampling and evaluation, considering the compute costs and future possibilities.",
      content: `When I first started using large language models (LLMs), I honestly saw them as glorified autocomplete machines—clever, predictive, and sure, sometimes useful. But the more I explored them, the more I started noticing possibilities beyond surface-level word prediction. Especially now, with the rise of agentic systems and protocols like MCP (Model Context Protocol), LLMs are starting to behave more like tools with agency—calling APIs, triggering workflows, even making decisions in context.

This shift is exciting, but also fragile. With access to external tools, things like prompt injection attacks become more than theoretical—suddenly they're risks with real-world consequences. That might be one reason we haven't seen these capabilities adopted at massive scale just yet.

Still, something caught my attention recently, and I wanted to get the thought down.

**Tuning the Parameters, Sampling the Truth**

LLMs generate responses by sampling from a probability distribution over the next token. That sampling can be shaped using two key parameters:

- Temperature: Controls randomness. Lower = more deterministic. Higher = more exploratory.
- Top-p (nucleus sampling): Restricts sampling to a dynamic shortlist of tokens whose cumulative probability crosses a threshold (like 0.9).

Most models—especially closed ones—lock these to default values optimized for perceived coherence. But "coherent" doesn't always mean accurate, and I don't think there's a one-size-fits-all value for either of these parameters.

So I started wondering—what if we didn't treat those values as fixed?

**The Thought: Generate, Score, Select**

Instead of answering with a single response at a fixed top-p and temperature, imagine this:

1. Generate multiple outputs for the same prompt (say, 10).
2. Vary temperature and top-p slightly for each one. Not dramatically—just enough to nudge different edges of the model's response spectrum.
3. Run each output through evaluation tools: something like a perplexity filter, a semantic fact-checker, or even an internal critic model.
4. Return the best-scoring result—based not just on fluency, but factual grounding or internal consistency.

Is this compute-intensive? Absolutely. But it might also help surface more reliable outputs in certain contexts—especially ones where hallucinations carry a higher cost.

**Yes, It's Expensive (For Now)**

This kind of multi-sample, score-and-select approach isn't feasible at scale right now. GPU time is costly, and energy constraints make things worse. But that bottleneck won't last forever. With growing attention on nuclear fusion, renewable resources, and more efficient compute architectures, it's possible we'll see a shift in what's affordable to run in real time.

If the cost of compute drops—or the value of high-confidence outputs rises—this method might start to look less ridiculous and more like a viable direction.

**A Quick Reality Check**

Is this idea already out there? Maybe. It feels obvious enough that someone's likely thought about it or even implemented a variant of it in internal eval systems. But that doesn't really matter here. What matters is the reasoning path that led to this thought—and the realization that accuracy isn't just about improving models, but also how we sample from them.

**Postscript**

This isn't a proposal, or a whitepaper, or even a serious recommendation. It's just a piece of mental scratchwork. A reminder that sometimes even small changes—like treating parameters as levers instead of constants—can open up whole new ways of thinking.`,
      author: "Bharath K",
      publishDate: "2025-07-19",
      readTime: "6 min read",
      category: "AI Research",
      tags: ["LLM", "Hallucinations", "Sampling", "AI Safety", "Research"],
      featured: true
    }
  ]

  // Filter posts based on search query only
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesSearch
    })
  }, [searchQuery, blogPosts])

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Handle reading a post
  const handleReadPost = (post: BlogPost) => {
    setSelectedPost(post)
  }

  const handleBackToPosts = () => {
    setSelectedPost(null)
  }

  // If a post is selected, show the full post view
  if (selectedPost) {
    return (
      <section>
        <div className="mb-6">
          <button
            onClick={handleBackToPosts}
            className="retro-button flex items-center gap-2 mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </button>
          
          <div className="card">
            <div className="mb-4">
              <h1 className="text-2xl md:text-3xl font-bold mb-3">{selectedPost.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedPost.publishDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </div>
              </div>
            </div>
            
            <div className="prose prose-gray max-w-none">
              {selectedPost.content.split('\n\n').map((paragraph, index) => {
                // Handle bold text formatting
                let formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                
                // Handle bullet points (lines starting with -)
                if (formattedParagraph.includes('\n- ')) {
                  const lines = formattedParagraph.split('\n');
                  let listItems: string[] = [];
                  let nonListContent: string[] = [];
                  
                  lines.forEach(line => {
                    if (line.trim().startsWith('- ')) {
                      listItems.push(`<li>${line.trim().substring(2)}</li>`);
                    } else if (line.trim()) {
                      if (listItems.length > 0) {
                        nonListContent.push(`<ul class="list-disc ml-6 mb-4">${listItems.join('')}</ul>`);
                        listItems = [];
                      }
                      nonListContent.push(line);
                    }
                  });
                  
                  if (listItems.length > 0) {
                    nonListContent.push(`<ul class="list-disc ml-6 mb-4">${listItems.join('')}</ul>`);
                  }
                  
                  formattedParagraph = nonListContent.join('<br>');
                }
                
                return (
                  <div key={index} className="mb-4 text-gray-700 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: formattedParagraph }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <h2 className="section-header">AI RESEARCH BLOG</h2>

      {/* Search Input */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-800 bg-amber-50 text-gray-900 font-mono focus:bg-white focus:border-amber-600 transition-all duration-300 outline-none"
            style={{
              boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </div>

      {/* Blog Posts List - Simple Titles */}
      <div className="space-y-3">
        {filteredPosts.map((post) => (
          <div key={post.id} className="group cursor-pointer" onClick={() => handleReadPost(post)}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-300 hover:bg-amber-50 transition-colors duration-200">
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors duration-200" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
