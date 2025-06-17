import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Brain, Target, Zap, Trophy } from "lucide-react"

export default function ReinforcementLearningPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            মেশিন লার্নিং
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">রিইনফোর্সমেন্ট লার্নিং</h1>
          <p className="text-xl text-muted-foreground">
            পুরস্কার এবং শাস্তির মাধ্যমে শেখা - এজেন্ট এনভায়রনমেন্টের সাথে ইন্টারঅ্যাক্ট করে সর্বোচ্চ রিওয়ার্ড পাওয়ার চেষ্টা করে।
          </p>
        </div>

        {/* What is Reinforcement Learning */}
        <Card className="bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">রিইনফোর্সমেন্ট লার্নিং কী?</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-700 space-y-3">
            <p>
              রিইনফোর্সমেন্ট লার্নিং (RL) হলো মেশিন লার্নিংয়ের একটি শাখা যেখানে একটি <strong>এজেন্ট</strong> একটি{" "}
              <strong>এনভায়রনমেন্টে</strong> <strong>অ্যাকশন</strong> নিয়ে <strong>রিওয়ার্ড</strong> বা <strong>পেনালটি</strong>{" "}
              পায়।
            </p>
            <div className="bg-purple-100 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">মূল উপাদান:</h4>
              <ul className="space-y-1">
                <li>
                  • <strong>এজেন্ট:</strong> যে শিখছে এবং সিদ্ধান্ত নিচ্ছে
                </li>
                <li>
                  • <strong>এনভায়রনমেন্ট:</strong> যে পরিবেশে এজেন্ট কাজ করে
                </li>
                <li>
                  • <strong>স্টেট:</strong> বর্তমান অবস্থা
                </li>
                <li>
                  • <strong>অ্যাকশন:</strong> এজেন্ট যা করতে পারে
                </li>
                <li>
                  • <strong>রিওয়ার্ড:</strong> অ্যাকশনের জন্য পাওয়া পুরস্কার/শাস্তি
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* RL vs Other ML */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">অন্যান্য ML থেকে পার্থক্য</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">বৈশিষ্ট্য</th>
                    <th className="border border-gray-300 p-3 text-left">সুপারভাইজড</th>
                    <th className="border border-gray-300 p-3 text-left">আনসুপারভাইজড</th>
                    <th className="border border-gray-300 p-3 text-left">রিইনফোর্সমেন্ট</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">ডেটা</td>
                    <td className="border border-gray-300 p-3">লেবেলযুক্ত</td>
                    <td className="border border-gray-300 p-3">লেবেলবিহীন</td>
                    <td className="border border-gray-300 p-3">রিওয়ার্ড সিগন্যাল</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">শেখার পদ্ধতি</td>
                    <td className="border border-gray-300 p-3">উদাহরণ থেকে</td>
                    <td className="border border-gray-300 p-3">প্যাটার্ন খোঁজা</td>
                    <td className="border border-gray-300 p-3">ট্রায়াল এবং এরর</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">ফিডব্যাক</td>
                    <td className="border border-gray-300 p-3">তাৎক্ষণিক</td>
                    <td className="border border-gray-300 p-3">কোন ফিডব্যাক নেই</td>
                    <td className="border border-gray-300 p-3">বিলম্বিত</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">লক্ষ্য</td>
                    <td className="border border-gray-300 p-3">প্রেডিকশন</td>
                    <td className="border border-gray-300 p-3">প্যাটার্ন আবিষ্কার</td>
                    <td className="border border-gray-300 p-3">সর্বোচ্চ রিওয়ার্ড</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Key Concepts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">মূল ধারণাসমূহ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* MDP */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. মার্কভ ডিসিশন প্রসেস (MDP)</h4>
              <p>RL সমস্যাগুলো সাধারণত MDP হিসেবে মডেল করা হয়।</p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">MDP এর উপাদান:</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>
                    • <strong>S:</strong> স্টেট স্পেস (সব সম্ভাব্য অবস্থা)
                  </li>
                  <li>
                    • <strong>A:</strong> অ্যাকশন স্পেস (সব সম্ভাব্য কাজ)
                  </li>
                  <li>
                    • <strong>P:</strong> ট্রানজিশন প্রোবাবিলিটি
                  </li>
                  <li>
                    • <strong>R:</strong> রিওয়ার্ড ফাংশন
                  </li>
                  <li>
                    • <strong>γ:</strong> ডিসকাউন্ট ফ্যাক্টর (0 ≤ γ ≤ 1)
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">উদাহরণ - গ্রিড ওয়ার্ল্ড:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# সাধারণ গ্রিড ওয়ার্ল্ড
# S = Start, G = Goal, X = Obstacle

Grid:
S . . G
. X . .
. . . .

States: সব গ্রিড সেল
Actions: উপর, নিচ, বাম, ডান
Rewards: 
  - Goal এ পৌঁছালে +100
  - Obstacle এ গেলে -100  
  - অন্য সেলে -1 (সময়ের জন্য পেনালটি)`}
                </pre>
              </div>
            </div>

            {/* Policy and Value Functions */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. পলিসি এবং ভ্যালু ফাংশন</h4>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">পলিসি (π):</h5>
                <p className="text-blue-700 text-sm mb-2">প্রতিটি স্টেটে কোন অ্যাকশন নিতে হবে তার নিয়ম।</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• ডিটারমিনিস্টিক: π(s) = a</li>
                  <li>• স্টোকাস্টিক: π(a|s) = P(action=a | state=s)</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">ভ্যালু ফাংশন:</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>
                    • <strong>State Value V(s):</strong> স্টেট s থেকে expected return
                  </li>
                  <li>
                    • <strong>Action Value Q(s,a):</strong> স্টেট s এ অ্যাকশন a নিলে expected return
                  </li>
                </ul>
              </div>
            </div>

            {/* Exploration vs Exploitation */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. এক্সপ্লোরেশন vs এক্সপ্লয়টেশন</h4>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-yellow-800">এক্সপ্লোরেশন:</h5>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• নতুন অ্যাকশন চেষ্টা করা</li>
                      <li>• অজানা এলাকা খোঁজা</li>
                      <li>• ভবিষ্যতের জন্য তথ্য সংগ্রহ</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-800">এক্সপ্লয়টেশন:</h5>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• জানা সেরা অ্যাকশন নেওয়া</li>
                      <li>• বর্তমান জ্ঞান ব্যবহার করা</li>
                      <li>• তাৎক্ষণিক রিওয়ার্ড পাওয়া</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-yellow-700 mt-2">
                  <strong>ট্রেড-অফ:</strong> খুব বেশি এক্সপ্লোর করলে কম রিওয়ার্ড, খুব বেশি এক্সপ্লয়ট করলে সেরা সমাধান মিস করা।
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* RL Algorithms */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">RL অ্যালগরিদম</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Q-Learning */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. Q-Learning</h4>
              <p>সবচেয়ে জনপ্রিয় model-free RL অ্যালগরিদম।</p>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold text-orange-800 mb-2">Q-Learning আপডেট রুল:</h5>
                <div className="font-mono text-orange-700 bg-white p-2 rounded text-sm">
                  Q(s,a) ← Q(s,a) + α[r + γ max Q(s',a') - Q(s,a)]
                </div>
                <ul className="text-sm text-orange-700 space-y-1 mt-2">
                  <li>• α = learning rate</li>
                  <li>• γ = discount factor</li>
                  <li>• r = immediate reward</li>
                  <li>• s' = next state</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python Implementation:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`import numpy as np
import random

class QLearningAgent:
    def __init__(self, states, actions, learning_rate=0.1, 
                 discount_factor=0.9, epsilon=0.1):
        self.states = states
        self.actions = actions
        self.lr = learning_rate
        self.gamma = discount_factor
        self.epsilon = epsilon
        
        # Q-table initialize করা
        self.q_table = np.zeros((states, actions))
    
    def choose_action(self, state):
        # Epsilon-greedy policy
        if random.random() < self.epsilon:
            return random.randint(0, self.actions - 1)  # Explore
        else:
            return np.argmax(self.q_table[state])  # Exploit
    
    def update_q_table(self, state, action, reward, next_state):
        # Q-learning update rule
        best_next_action = np.argmax(self.q_table[next_state])
        td_target = reward + self.gamma * self.q_table[next_state][best_next_action]
        td_error = td_target - self.q_table[state][action]
        self.q_table[state][action] += self.lr * td_error

# ব্যবহার
agent = QLearningAgent(states=16, actions=4)  # 4x4 grid, 4 actions

# Training loop
for episode in range(1000):
    state = 0  # start state
    
    while state != 15:  # goal state
        action = agent.choose_action(state)
        next_state, reward = environment.step(state, action)
        agent.update_q_table(state, action, reward, next_state)
        state = next_state`}
                </pre>
              </div>
            </div>

            {/* SARSA */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. SARSA</h4>
              <p>On-policy RL অ্যালগরিদম যা বর্তমান পলিসি অনুসরণ করে।</p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">SARSA আপডেট রুল:</h5>
                <div className="font-mono text-blue-700 bg-white p-2 rounded text-sm">
                  Q(s,a) ← Q(s,a) + α[r + γ Q(s',a') - Q(s,a)]
                </div>
                <p className="text-sm text-blue-700 mt-2">
                  Q-Learning এর থেকে পার্থক্য: পরবর্তী অ্যাকশন a' আসলেই নেওয়া হয়, max নয়।
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">SARSA vs Q-Learning:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h6 className="font-semibold">SARSA:</h6>
                    <ul className="space-y-1">
                      <li>• On-policy</li>
                      <li>• Conservative</li>
                      <li>• Safe exploration</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold">Q-Learning:</h6>
                    <ul className="space-y-1">
                      <li>• Off-policy</li>
                      <li>• Aggressive</li>
                      <li>• Optimal policy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Gradient */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. পলিসি গ্রেডিয়েন্ট</h4>
              <p>সরাসরি পলিসি অপটিমাইজ করার পদ্ধতি।</p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">মূল ধারণা:</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Q-table এর পরিবর্তে পলিসি ফাংশন শেখা</li>
                  <li>• গ্রেডিয়েন্ট অ্যাসেন্ট ব্যবহার করে পলিসি উন্নত করা</li>
                  <li>• Continuous action space এ কাজ করে</li>
                  <li>• Neural network দিয়ে পলিসি represent করা</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">জনপ্রিয় অ্যালগরিদম:</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• REINFORCE</li>
                  <li>• Actor-Critic</li>
                  <li>• Proximal Policy Optimization (PPO)</li>
                  <li>• Trust Region Policy Optimization (TRPO)</li>
                </ul>
              </div>
            </div>

            {/* Deep RL */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">ৄ. ডিপ রিইনফোর্সমেন্ট লার্নিং</h4>
              <p>Neural network এর সাথে RL এর সমন্বয়।</p>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">প্রধান পদ্ধতি:</h5>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>
                    • <strong>Deep Q-Network (DQN):</strong> Q-function এর জন্য neural network
                  </li>
                  <li>
                    • <strong>Double DQN:</strong> Overestimation সমস্যা সমাধান
                  </li>
                  <li>
                    • <strong>Dueling DQN:</strong> State value এবং advantage আলাদা করা
                  </li>
                  <li>
                    • <strong>A3C:</strong> Asynchronous Advantage Actor-Critic
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications */}
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">RL এর প্রয়োগ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Card className="bg-blue-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-blue-600 flex items-center">
                      <Brain className="mr-2 h-5 w-5" />
                      গেম প্লেয়িং
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• AlphaGo (Go খেলা)</li>
                      <li>• OpenAI Five (Dota 2)</li>
                      <li>• AlphaStar (StarCraft II)</li>
                      <li>• Atari গেমস</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-green-600 flex items-center">
                      <Target className="mr-2 h-5 w-5" />
                      রোবোটিক্স
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• রোবট নেভিগেশন</li>
                      <li>• Manipulation tasks</li>
                      <li>• Autonomous vehicles</li>
                      <li>• Drone control</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-purple-600 flex items-center">
                      <Zap className="mr-2 h-5 w-5" />
                      ফাইন্যান্স
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Algorithmic trading</li>
                      <li>• Portfolio optimization</li>
                      <li>• Risk management</li>
                      <li>• Fraud detection</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Card className="bg-orange-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-orange-600 flex items-center">
                      <Trophy className="mr-2 h-5 w-5" />
                      রেকমেন্ডেশন সিস্টেম
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Netflix movie recommendations</li>
                      <li>• YouTube video suggestions</li>
                      <li>• E-commerce product recommendations</li>
                      <li>• News article recommendations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-teal-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-teal-600">হেলথকেয়ার</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Drug discovery</li>
                      <li>• Treatment optimization</li>
                      <li>• Medical diagnosis</li>
                      <li>• Personalized medicine</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-yellow-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-yellow-600">অন্যান্য</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Resource allocation</li>
                      <li>• Network optimization</li>
                      <li>• Smart grid management</li>
                      <li>• Chatbot development</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Challenges */}
        <Card>
          <CardHeader>
            <CardTitle className="text-indigo-600">RL এর চ্যালেঞ্জ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">সমস্যাসমূহ:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Sample efficiency কম</li>
                  <li>• Training অস্থির</li>
                  <li>• Reward engineering কঠিন</li>
                  <li>• Exploration-exploitation balance</li>
                  <li>• Partial observability</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">সমাধানের দিক:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Experience replay</li>
                  <li>• Transfer learning</li>
                  <li>• Curriculum learning</li>
                  <li>• Multi-agent RL</li>
                  <li>• Meta-learning</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">RL শুরু করার উপায়</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold">শেখার ক্রম:</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ১
                  </div>
                  <span>MDP এবং মূল ধারণা বুঝুন</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ২
                  </div>
                  <span>Q-Learning দিয়ে শুরু করুন</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৩
                  </div>
                  <span>OpenAI Gym এ practice করুন</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৪
                  </div>
                  <span>Deep RL শিখুন</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">প্রয়োজনীয় টুলস:</h4>
              <ul className="text-sm space-y-1">
                <li>• Python, NumPy, Matplotlib</li>
                <li>• OpenAI Gym</li>
                <li>• TensorFlow/PyTorch</li>
                <li>• Stable Baselines3</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/machine-learning">
              <ArrowLeft className="mr-2 h-4 w-4" />
              মেশিন লার্নিং মূল পাতা
            </Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/deep-learning">
              ডিপ লার্নিং
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
