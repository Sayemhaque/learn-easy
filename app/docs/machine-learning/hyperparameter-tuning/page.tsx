import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function HyperparameterTuningPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            মেশিন লার্নিং
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">হাইপারপ্যারামিটার টিউনিং</h1>
          <p className="text-xl text-muted-foreground">
            মডেলের সর্বোচ্চ পারফরম্যান্স পেতে হাইপারপ্যারামিটার অপটিমাইজেশন - ML এর শিল্প।
          </p>
        </div>

        {/* What are Hyperparameters */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">হাইপারপ্যারামিটার কী?</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-3">
            <p>হাইপারপ্যারামিটার হলো মডেলের কনফিগারেশন সেটিংস যা ট্রেনিংয়ের আগে সেট করতে হয়। এগুলো ডেটা থেকে শেখা হয় না।</p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">প্যারামিটার vs হাইপারপ্যারামিটার:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold">প্যারামিটার:</h5>
                  <ul className="space-y-1">
                    <li>• মডেল ট্রেনিংয়ে শেখা হয়</li>
                    <li>• ডেটা থেকে আসে</li>
                    <li>• উদাহরণ: Linear regression এর weights</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold">হাইপারপ্যারামিটার:</h5>
                  <ul className="space-y-1">
                    <li>• ম্যানুয়ালি সেট করতে হয়</li>
                    <li>• মডেলের আচরণ নিয়ন্ত্রণ করে</li>
                    <li>• উদাহরণ: Learning rate, tree depth</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Hyperparameters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">সাধারণ হাইপারপ্যারামিটার</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>বিভিন্ন অ্যালগরিদমের জন্য বিভিন্ন হাইপারপ্যারামিটার রয়েছে।</p>

            {/* Random Forest */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. Random Forest</h4>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-green-800">মূল প্যারামিটার:</h5>
                    <ul className="text-green-700 space-y-1">
                      <li>
                        • <strong>n_estimators:</strong> Tree এর সংখ্যা
                      </li>
                      <li>
                        • <strong>max_depth:</strong> Tree এর সর্বোচ্চ গভীরতা
                      </li>
                      <li>
                        • <strong>min_samples_split:</strong> Split এর জন্য মিনিমাম sample
                      </li>
                      <li>
                        • <strong>min_samples_leaf:</strong> Leaf এ মিনিমাম sample
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-800">অন্যান্য:</h5>
                    <ul className="text-green-700 space-y-1">
                      <li>
                        • <strong>max_features:</strong> প্রতি split এ feature সংখ্যা
                      </li>
                      <li>
                        • <strong>bootstrap:</strong> Sampling with replacement
                      </li>
                      <li>
                        • <strong>random_state:</strong> Reproducibility
                      </li>
                      <li>
                        • <strong>n_jobs:</strong> Parallel processing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">উদাহরণ:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.ensemble import RandomForestClassifier

# ডিফল্ট প্যারামিটার
rf_default = RandomForestClassifier()

# কাস্টম প্যারামিটার
rf_custom = RandomForestClassifier(
    n_estimators=200,        # বেশি tree = ভাল পারফরম্যান্স কিন্তু ধীর
    max_depth=10,           # কম depth = কম overfitting
    min_samples_split=5,    # বেশি samples = কম overfitting
    min_samples_leaf=2,     # বেশি samples = smoother decision boundary
    max_features='sqrt',    # feature randomness
    bootstrap=True,         # sampling with replacement
    random_state=42,        # reproducible results
    n_jobs=-1              # সব CPU core ব্যবহার
)`}
                </pre>
              </div>
            </div>

            {/* SVM */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. Support Vector Machine (SVM)</h4>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-blue-800">মূল প্যারামিটার:</h5>
                    <ul className="text-blue-700 space-y-1">
                      <li>
                        • <strong>C:</strong> Regularization strength
                      </li>
                      <li>
                        • <strong>kernel:</strong> Kernel type (linear, rbf, poly)
                      </li>
                      <li>
                        • <strong>gamma:</strong> RBF kernel coefficient
                      </li>
                      <li>
                        • <strong>degree:</strong> Polynomial kernel degree
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800">প্রভাব:</h5>
                    <ul className="text-blue-700 space-y-1">
                      <li>• বড় C = কম regularization</li>
                      <li>• ছোট gamma = smooth decision boundary</li>
                      <li>• RBF = non-linear problems</li>
                      <li>• Linear = simple, fast</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Neural Networks */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. Neural Networks</h4>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-purple-800">Architecture:</h5>
                    <ul className="text-purple-700 space-y-1">
                      <li>
                        • <strong>hidden_layer_sizes:</strong> Hidden layer এর size
                      </li>
                      <li>
                        • <strong>activation:</strong> Activation function
                      </li>
                      <li>
                        • <strong>solver:</strong> Optimization algorithm
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-800">Training:</h5>
                    <ul className="text-purple-700 space-y-1">
                      <li>
                        • <strong>learning_rate:</strong> Step size
                      </li>
                      <li>
                        • <strong>max_iter:</strong> Maximum iterations
                      </li>
                      <li>
                        • <strong>alpha:</strong> L2 regularization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tuning Methods */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">টিউনিং পদ্ধতি</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Grid Search */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. গ্রিড সার্চ</h4>
              <p>সব সম্ভাব্য combination চেষ্টা করা। নিশ্চিত কিন্তু ধীর।</p>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold text-orange-800 mb-2">কিভাবে কাজ করে:</h5>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• প্রতিটি প্যারামিটারের জন্য value range দেওয়া</li>
                  <li>• সব combination এর grid তৈরি</li>
                  <li>• প্রতিটি combination cross-validation দিয়ে test করা</li>
                  <li>• সেরা combination select করা</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python Implementation:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split

# নমুনা ডেটা
X, y = make_classification(n_samples=1000, n_features=20, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# প্যারামিটার গ্রিড ডিফাইন করা
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [5, 10, 15, None],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

# Random Forest মডেল
rf = RandomForestClassifier(random_state=42)

# Grid Search
grid_search = GridSearchCV(
    estimator=rf,
    param_grid=param_grid,
    cv=5,                    # 5-fold cross validation
    scoring='accuracy',      # evaluation metric
    n_jobs=-1,              # parallel processing
    verbose=1               # progress দেখানো
)

# ফিট করা
grid_search.fit(X_train, y_train)

# সেরা প্যারামিটার
print("সেরা প্যারামিটার:")
print(grid_search.best_params_)

print(f"\\nসেরা CV স্কোর: {grid_search.best_score_:.4f}")

# সেরা মডেল
best_model = grid_search.best_estimator_

# Test set এ evaluation
test_score = best_model.score(X_test, y_test)
print(f"Test স্কোর: {test_score:.4f}")

# সব results দেখা
results_df = pd.DataFrame(grid_search.cv_results_)
print("\\nTop 5 combinations:")
print(results_df.nlargest(5, 'mean_test_score')[['params', 'mean_test_score', 'std_test_score']])`}
                </pre>
              </div>
            </div>

            {/* Random Search */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. র‍্যান্ডম সার্চ</h4>
              <p>র‍্যান্ডমলি combination চেষ্টা করা। দ্রুত এবং প্রায়ই Grid Search এর মতোই ভাল।</p>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">সুবিধা:</h5>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Grid Search এর চেয়ে দ্রুত</li>
                  <li>• Continuous parameters handle করতে পারে</li>
                  <li>• কম গুরুত্বপূর্ণ parameters এ সময় নষ্ট করে না</li>
                  <li>• High-dimensional space এ ভাল কাজ করে</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python Implementation:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint, uniform

# প্যারামিটার ডিস্ট্রিবিউশন
param_distributions = {
    'n_estimators': randint(50, 500),           # 50-500 এর মধ্যে random integer
    'max_depth': [5, 10, 15, 20, None],
    'min_samples_split': randint(2, 20),
    'min_samples_leaf': randint(1, 10),
    'max_features': ['sqrt', 'log2', None],
    'bootstrap': [True, False]
}

# Random Search
random_search = RandomizedSearchCV(
    estimator=RandomForestClassifier(random_state=42),
    param_distributions=param_distributions,
    n_iter=100,              # 100টি random combination চেষ্টা
    cv=5,
    scoring='accuracy',
    n_jobs=-1,
    verbose=1,
    random_state=42
)

# ফিট করা
random_search.fit(X_train, y_train)

print("Random Search সেরা প্যারামিটার:")
print(random_search.best_params_)
print(f"সেরা CV স্কোর: {random_search.best_score_:.4f}")

# Grid Search vs Random Search comparison
print(f"\\nGrid Search সময়: {grid_search_time:.2f} সেকেন্ড")
print(f"Random Search সময়: {random_search_time:.2f} সেকেন্ড")`}
                </pre>
              </div>
            </div>

            {/* Bayesian Optimization */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. বেইজিয়ান অপটিমাইজেশন</h4>
              <p>পূর্ববর্তী ফলাফল ব্যবহার করে স্মার্ট search। সবচেয়ে efficient।</p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">কিভাবে কাজ করে:</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Gaussian Process দিয়ে objective function model করা</li>
                  <li>• Acquisition function দিয়ে পরবর্তী point select করা</li>
                  <li>• Exploration vs Exploitation balance</li>
                  <li>• কম evaluation এ ভাল result</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Optuna দিয়ে Implementation:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`import optuna
from sklearn.model_selection import cross_val_score

def objective(trial):
    # প্যারামিটার suggest করা
    n_estimators = trial.suggest_int('n_estimators', 50, 500)
    max_depth = trial.suggest_int('max_depth', 3, 20)
    min_samples_split = trial.suggest_int('min_samples_split', 2, 20)
    min_samples_leaf = trial.suggest_int('min_samples_leaf', 1, 10)
    max_features = trial.suggest_categorical('max_features', ['sqrt', 'log2', None])
    
    # মডেল তৈরি
    model = RandomForestClassifier(
        n_estimators=n_estimators,
        max_depth=max_depth,
        min_samples_split=min_samples_split,
        min_samples_leaf=min_samples_leaf,
        max_features=max_features,
        random_state=42
    )
    
    # Cross validation score
    scores = cross_val_score(model, X_train, y_train, cv=5, scoring='accuracy')
    return scores.mean()

# Study তৈরি
study = optuna.create_study(direction='maximize')

# Optimization চালানো
study.optimize(objective, n_trials=100)

print("Optuna সেরা প্যারামিটার:")
print(study.best_params)
print(f"সেরা স্কোর: {study.best_value:.4f}")

# Optimization history plot
optuna.visualization.plot_optimization_history(study).show()
optuna.visualization.plot_param_importances(study).show()`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Techniques */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-600">অ্যাডভান্সড টেকনিক</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Multi-objective Optimization */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. মাল্টি-অবজেক্টিভ অপটিমাইজেশন</h4>
              <p>একাধিক মেট্রিক একসাথে অপটিমাইজ করা (যেমন: accuracy এবং speed)।</p>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`import time

def multi_objective(trial):
    # প্যারামিটার
    n_estimators = trial.suggest_int('n_estimators', 50, 500)
    max_depth = trial.suggest_int('max_depth', 3, 20)
    
    model = RandomForestClassifier(
        n_estimators=n_estimators,
        max_depth=max_depth,
        random_state=42
    )
    
    # Accuracy measure
    start_time = time.time()
    scores = cross_val_score(model, X_train, y_train, cv=3, scoring='accuracy')
    training_time = time.time() - start_time
    
    accuracy = scores.mean()
    speed = 1 / training_time  # Higher is better
    
    return accuracy, speed

# Multi-objective study
study = optuna.create_study(directions=['maximize', 'maximize'])
study.optimize(multi_objective, n_trials=50)

# Pareto front
pareto_front = study.best_trials
for trial in pareto_front:
    print(f"Accuracy: {trial.values[0]:.4f}, Speed: {trial.values[1]:.4f}")
    print(f"Params: {trial.params}")
    print("-" * 50)`}
                </pre>
              </div>
            </div>

            {/* Early Stopping */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. আর্লি স্টপিং</h4>
              <p>খারাপ trial গুলো তাড়াতাড়ি বন্ধ করে সময় বাঁচানো।</p>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`def objective_with_pruning(trial):
    n_estimators = trial.suggest_int('n_estimators', 50, 500)
    max_depth = trial.suggest_int('max_depth', 3, 20)
    
    model = RandomForestClassifier(
        n_estimators=n_estimators,
        max_depth=max_depth,
        random_state=42
    )
    
    # Incremental evaluation
    for step in range(5):  # 5-fold CV
        # একটি fold এ train এবং validate
        fold_score = cross_val_score(model, X_train, y_train, cv=5, scoring='accuracy')[step]
        
        # Intermediate value report করা
        trial.report(fold_score, step)
        
        # Pruning check
        if trial.should_prune():
            raise optuna.exceptions.TrialPruned()
    
    return cross_val_score(model, X_train, y_train, cv=5, scoring='accuracy').mean()

# Pruner সহ study
study = optuna.create_study(
    direction='maximize',
    pruner=optuna.pruners.MedianPruner(n_startup_trials=5, n_warmup_steps=2)
)

study.optimize(objective_with_pruning, n_trials=100)`}
                </pre>
              </div>
            </div>

            {/* Hyperband */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. হাইপারব্যান্ড</h4>
              <p>বিভিন্ন budget (epochs, data size) এ parallel search।</p>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.model_selection import validation_curve

def hyperband_objective(trial):
    # প্যারামিটার
    n_estimators = trial.suggest_int('n_estimators', 10, 500)
    max_depth = trial.suggest_int('max_depth', 3, 20)
    
    # Budget (training data size)
    budget = trial.suggest_int('budget', 100, len(X_train))
    
    # Subset of training data
    X_subset = X_train[:budget]
    y_subset = y_train[:budget]
    
    model = RandomForestClassifier(
        n_estimators=n_estimators,
        max_depth=max_depth,
        random_state=42
    )
    
    # Validation curve
    train_scores, val_scores = validation_curve(
        model, X_subset, y_subset,
        param_name='n_estimators',
        param_range=[n_estimators],
        cv=3
    )
    
    return val_scores.mean()

# Hyperband-style optimization
study = optuna.create_study(direction='maximize')
study.optimize(hyperband_objective, n_trials=200)`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
          <CardHeader>
            <CardTitle className="text-teal-800">হাইপারপ্যারামিটার টিউনিং বেস্ট প্র্যাকটিস</CardTitle>
          </CardHeader>
          <CardContent className="text-teal-700 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">কৌশল:</h4>
                <ul className="text-sm space-y-1">
                  <li>• সহজ মডেল দিয়ে শুরু করুন</li>
                  <li>• গুরুত্বপূর্ণ প্যারামিটার আগে টিউন করুন</li>
                  <li>• Coarse-to-fine search করুন</li>
                  <li>• Cross-validation ব্যবহার করুন</li>
                  <li>• Validation set আলাদা রাখুন</li>
                  <li>• Multiple metrics track করুন</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">এড়িয়ে চলুন:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Test set দিয়ে tuning</li>
                  <li>• অতিরিক্ত optimization</li>
                  <li>• শুধু একটি metric optimize করা</li>
                  <li>• Data leakage</li>
                  <li>• Random state ignore করা</li>
                  <li>• Computational cost ignore করা</li>
                </ul>
              </div>
            </div>

            <div className="bg-teal-100 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">টিউনিং অর্ডার:</h4>
              <ol className="text-sm space-y-1">
                <li>
                  1. <strong>Model selection:</strong> কোন অ্যালগরিদম ব্যবহার করবেন
                </li>
                <li>
                  2. <strong>Coarse tuning:</strong> Wide range এ search
                </li>
                <li>
                  3. <strong>Fine tuning:</strong> Narrow range এ detailed search
                </li>
                <li>
                  4. <strong>Ensemble:</strong> Multiple models combine করা
                </li>
              </ol>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">সময় বাঁচানোর উপায়:</h4>
              <ul className="text-sm space-y-1">
                <li>• Smaller dataset দিয়ে initial tuning</li>
                <li>• Parallel processing ব্যবহার করুন</li>
                <li>• Early stopping implement করুন</li>
                <li>• Previous experiments থেকে শিখুন</li>
                <li>• Cloud computing ব্যবহার করুন</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/machine-learning/feature-engineering">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ফিচার ইঞ্জিনিয়ারিং
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
