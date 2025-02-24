import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Original 10 recipes with detailed structure
  const originalRecipes = [
    {
      name: "Avocado Toast",
      category: "Breakfast",
      ingredients: ["1 ripe avocado", "2 slices whole grain bread", "1 tsp fresh lemon juice", "Pinch of salt", "Pinch of black pepper"],
      instructions: [
        "Gather all ingredients and tools: toaster, knife, fork, small bowl.",
        "Toast bread slices until golden brown.",
        "While bread toasts, halve avocado, remove pit, and scoop flesh into a bowl.",
        "Add lemon juice, salt, and pepper to avocado.",
        "Mash with a fork to desired consistency.",
        "Spread avocado mixture evenly over toasted bread.",
        "Serve immediately."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "3 minutes", cooking: "2 minutes (toasting)" }
    },
    {
      name: "Greek Yogurt Parfait",
      category: "Breakfast",
      ingredients: ["1 cup plain Greek yogurt", "1 tbsp honey", "1/4 cup fresh mixed berries", "2 tbsp granola"],
      instructions: [
        "Gather ingredients and a tall glass or bowl.",
        "Spoon half the yogurt into the glass bottom.",
        "Drizzle half the honey over the yogurt.",
        "Add half the berries and 1 tbsp granola.",
        "Repeat layers with remaining ingredients.",
        "Serve immediately for best texture."
      ],
      prepTime: "3 minutes",
      timeBreakdown: { preparation: "3 minutes", cooking: "0 minutes" }
    },
    {
      name: "Veggie Scramble",
      category: "Breakfast",
      ingredients: ["2 large eggs", "1/4 cup fresh spinach", "1/4 cup diced bell peppers", "1 tbsp olive oil", "Pinch of salt"],
      instructions: [
        "Gather ingredients, skillet, spatula, and bowl.",
        "Wash and chop vegetables if not pre-prepped.",
        "Crack eggs into a bowl and whisk lightly.",
        "Heat olive oil in skillet over medium heat.",
        "Add bell peppers and sauté for 2 minutes.",
        "Add spinach and cook until slightly wilted, about 1 minute.",
        "Pour in eggs and stir gently until cooked, about 3-4 minutes.",
        "Season with salt and serve hot."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "4 minutes", cooking: "6 minutes" }
    },
    {
      name: "Quinoa Bowl",
      category: "Lunch",
      ingredients: ["1/2 cup dry quinoa", "1 cup water", "1/4 cup cooked black beans", "1 tbsp salsa", "1/4 ripe avocado"],
      instructions: [
        "Gather ingredients, small pot, and bowl.",
        "Rinse quinoa under cold water.",
        "Bring water to a boil in pot.",
        "Add quinoa, reduce heat to low, cover, and simmer for 12-15 minutes.",
        "While quinoa cooks, dice avocado.",
        "Fluff cooked quinoa with a fork and transfer to a bowl.",
        "Mix in black beans and salsa.",
        "Top with diced avocado and serve warm."
      ],
      prepTime: "20 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "15 minutes" }
    },
    {
      name: "Turkey Wrap",
      category: "Lunch",
      ingredients: ["1 large whole wheat tortilla", "3 oz sliced turkey breast", "1/4 cup shredded lettuce", "1 tbsp hummus"],
      instructions: [
        "Gather ingredients and a plate.",
        "Lay tortilla flat on a clean surface.",
        "Spread hummus evenly across tortilla, leaving a 1-inch border.",
        "Layer turkey slices over hummus.",
        "Add shredded lettuce evenly.",
        "Fold bottom of tortilla up, then roll tightly from one side.",
        "Slice in half diagonally and serve."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Chickpea Salad",
      category: "Lunch",
      ingredients: ["1 cup canned chickpeas", "1/4 cup diced cucumber", "1/4 cup diced tomatoes", "1 tbsp olive oil", "1 tbsp fresh lemon juice"],
      instructions: [
        "Gather ingredients, bowl, and strainer.",
        "Rinse and drain chickpeas.",
        "Wash and dice cucumber and tomatoes.",
        "Combine chickpeas, cucumber, and tomatoes in a bowl.",
        "Drizzle with olive oil and lemon juice.",
        "Toss to coat evenly.",
        "Refrigerate for 15 minutes (optional) and serve chilled."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "0 minutes" }
    },
    {
      name: "Baked Salmon",
      category: "Dinner",
      ingredients: ["1 salmon fillet (6 oz)", "1 tsp olive oil", "1 tsp minced garlic", "Pinch of salt", "Pinch of black pepper"],
      instructions: [
        "Gather ingredients, baking sheet, and foil.",
        "Preheat oven to 400°F (200°C).",
        "Line baking sheet with foil.",
        "Place salmon skin-side down on foil.",
        "Brush with olive oil.",
        "Sprinkle with garlic, salt, and pepper.",
        "Bake for 12-15 minutes until salmon flakes easily with a fork.",
        "Let rest for 2 minutes before serving."
      ],
      prepTime: "20 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "15 minutes" }
    },
    {
      name: "Oatmeal Bowl",
      category: "Breakfast",
      ingredients: ["1/2 cup rolled oats", "1 cup milk (any type)", "1 tbsp peanut butter", "1/2 banana"],
      instructions: [
        "Gather ingredients, small pot, and spoon.",
        "Combine oats and milk in pot.",
        "Bring to a boil over medium heat, stirring occasionally.",
        "Reduce heat and simmer for 5-7 minutes until thickened.",
        "Remove from heat and stir in peanut butter.",
        "Slice banana and arrange on top.",
        "Serve warm."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "3 minutes", cooking: "7 minutes" }
    },
    {
      name: "Spinach Smoothie",
      category: "Breakfast",
      ingredients: ["1 cup fresh spinach", "1 ripe banana", "1 cup almond milk", "1 tbsp almond butter"],
      instructions: [
        "Gather ingredients and blender.",
        "Wash spinach thoroughly.",
        "Peel banana and break into chunks.",
        "Add all ingredients to blender.",
        "Blend on high until smooth, about 30-60 seconds.",
        "Pour into a glass and serve immediately."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "4 minutes", cooking: "1 minute (blending)" }
    },
    {
      name: "Lentil Soup",
      category: "Dinner",
      ingredients: ["1/2 cup dry lentils", "2 cups vegetable broth", "1/4 cup diced carrots", "1/4 cup diced celery", "1 tsp ground cumin"],
      instructions: [
        "Gather ingredients, pot, and knife.",
        "Rinse lentils under cold water.",
        "Dice carrots and celery if not pre-prepped.",
        "Combine all ingredients in pot.",
        "Bring to a boil over medium-high heat.",
        "Reduce heat to low and simmer for 20-25 minutes until lentils are tender.",
        "Stir occasionally and adjust seasoning if needed.",
        "Serve warm."
      ],
      prepTime: "30 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "25 minutes" }
    }
  ];

  // Additional 80 recipes with enhanced structure
  const additionalRecipes = [
    // Breakfast (20)
    {
      name: "Banana Pancakes",
      category: "Breakfast",
      ingredients: ["1 ripe banana", "2 large eggs", "1/4 tsp ground cinnamon", "1 tsp cooking oil (e.g., canola)"],
      instructions: [
        "Gather ingredients, bowl, fork, and non-stick skillet.",
        "Peel and mash banana in a bowl until smooth.",
        "Add eggs and cinnamon, mixing well.",
        "Heat oil in skillet over medium heat.",
        "Pour small portions (about 1/4 cup each) of batter into skillet.",
        "Cook for 2-3 minutes per side until golden brown.",
        "Serve warm."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "5 minutes" }
    },
    {
      name: "Chia Pudding",
      category: "Breakfast",
      ingredients: ["2 tbsp chia seeds", "1 cup almond milk", "1 tsp honey", "1/4 cup fresh berries (e.g., strawberries)"],
      instructions: [
        "Gather ingredients, bowl or jar, and spoon.",
        "Mix chia seeds, almond milk, and honey in a bowl or jar.",
        "Stir well to prevent clumping.",
        "Cover and refrigerate for at least 2 hours or overnight.",
        "Stir again before serving.",
        "Top with berries and serve chilled."
      ],
      prepTime: "5 minutes + 2 hours chilling",
      timeBreakdown: { preparation: "5 minutes", chilling: "2 hours", cooking: "0 minutes" }
    },
    {
      name: "Egg Muffin",
      category: "Breakfast",
      ingredients: ["2 large eggs", "1/4 cup fresh spinach", "1 tbsp shredded cheese (e.g., cheddar)", "Pinch of salt"],
      instructions: [
        "Gather ingredients, muffin tin, bowl, and whisk.",
        "Preheat oven to 375°F (190°C).",
        "Whisk eggs with salt in a bowl.",
        "Chop spinach and stir into eggs.",
        "Grease a muffin tin cup and pour in mixture.",
        "Top with cheese.",
        "Bake for 15 minutes until set.",
        "Cool slightly and serve."
      ],
      prepTime: "20 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "15 minutes" }
    },
    {
      name: "Peanut Butter Toast",
      category: "Breakfast",
      ingredients: ["1 slice whole grain bread", "1 tbsp peanut butter", "1/2 ripe banana"],
      instructions: [
        "Gather ingredients, toaster, and knife.",
        "Toast bread until golden brown.",
        "Spread peanut butter evenly on toast.",
        "Slice banana and arrange on top.",
        "Serve immediately."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "3 minutes", cooking: "2 minutes (toasting)" }
    },
    {
      name: "Berry Oats",
      category: "Breakfast",
      ingredients: ["1/2 cup rolled oats", "1 cup water", "1/4 cup mixed fresh berries", "1 tsp chia seeds"],
      instructions: [
        "Gather ingredients, pot, and spoon.",
        "Combine oats and water in a pot.",
        "Bring to a boil over medium heat, stirring occasionally.",
        "Reduce heat and simmer for 5-7 minutes.",
        "Stir in berries and chia seeds.",
        "Serve warm."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "3 minutes", cooking: "7 minutes" }
    },
    {
      name: "Spinach Frittata",
      category: "Breakfast",
      ingredients: ["3 large eggs", "1 cup fresh spinach", "1/4 cup diced onion", "1 tbsp olive oil"],
      instructions: [
        "Gather ingredients, skillet, bowl, and whisk.",
        "Heat oil in skillet over medium heat.",
        "Sauté onion for 2-3 minutes until soft.",
        "Add spinach and cook until wilted, about 1-2 minutes.",
        "Whisk eggs and pour over vegetables.",
        "Cook for 4-5 minutes until set.",
        "Serve warm."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "10 minutes" }
    },
    {
      name: "Apple Cinnamon Oatmeal",
      category: "Breakfast",
      ingredients: ["1/2 cup rolled oats", "1 cup milk", "1/2 apple, diced", "1/2 tsp ground cinnamon"],
      instructions: [
        "Gather ingredients, pot, and knife.",
        "Dice apple.",
        "Combine oats and milk in a pot.",
        "Bring to a boil over medium heat, stirring occasionally.",
        "Add apple and cinnamon, reduce heat.",
        "Simmer for 5-7 minutes.",
        "Serve warm."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "3 minutes", cooking: "7 minutes" }
    },
    {
      name: "Breakfast Burrito",
      category: "Breakfast",
      ingredients: ["1 flour tortilla", "2 large eggs", "1/4 cup salsa", "1/4 ripe avocado"],
      instructions: [
        "Gather ingredients, skillet, and spatula.",
        "Scramble eggs in skillet over medium heat for 3-4 minutes.",
        "Warm tortilla in microwave for 10 seconds (optional).",
        "Spoon eggs onto tortilla.",
        "Add salsa and diced avocado.",
        "Roll up tortilla and serve warm."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "5 minutes" }
    },
    {
      name: "Mango Smoothie",
      category: "Breakfast",
      ingredients: ["1 cup mango chunks (fresh or frozen)", "1 cup plain yogurt", "1/2 cup orange juice"],
      instructions: [
        "Gather ingredients and blender.",
        "Add mango, yogurt, and orange juice to blender.",
        "Blend on high until smooth, about 30-60 seconds.",
        "Pour into a glass and serve chilled."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "4 minutes", cooking: "1 minute (blending)" }
    },
    {
      name: "Cottage Cheese Bowl",
      category: "Breakfast",
      ingredients: ["1/2 cup cottage cheese", "1/4 cup diced pineapple", "1 tbsp chopped nuts (e.g., almonds)"],
      instructions: [
        "Gather ingredients and bowl.",
        "Scoop cottage cheese into bowl.",
        "Top with pineapple and nuts.",
        "Serve immediately."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Egg and Tomato Toast",
      category: "Breakfast",
      ingredients: ["1 slice whole grain bread", "1 large egg", "1/2 medium tomato", "Pinch of salt"],
      instructions: [
        "Gather ingredients, toaster, and skillet.",
        "Toast bread until golden.",
        "Fry egg in skillet over medium heat for 3-4 minutes.",
        "Slice tomato thinly.",
        "Place egg on toast, top with tomato, and sprinkle with salt.",
        "Serve immediately."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "5 minutes" }
    },
    {
      name: "Almond Butter Oats",
      category: "Breakfast",
      ingredients: ["1/2 cup rolled oats", "1 cup water", "1 tbsp almond butter", "1 tsp honey"],
      instructions: [
        "Gather ingredients, pot, and spoon.",
        "Combine oats and water in a pot.",
        "Bring to a boil over medium heat, stirring occasionally.",
        "Reduce heat and simmer for 5-7 minutes.",
        "Stir in almond butter and honey.",
        "Serve warm."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "3 minutes", cooking: "7 minutes" }
    },
    {
      name: "Blueberry Yogurt",
      category: "Breakfast",
      ingredients: ["1 cup plain yogurt", "1/4 cup fresh blueberries", "1 tbsp granola"],
      instructions: [
        "Gather ingredients and bowl.",
        "Spoon yogurt into bowl.",
        "Top with blueberries and granola.",
        "Serve immediately."
      ],
      prepTime: "3 minutes",
      timeBreakdown: { preparation: "3 minutes", cooking: "0 minutes" }
    },
    {
      name: "Veggie Omelette",
      category: "Breakfast",
      ingredients: ["2 large eggs", "1/4 cup sliced mushrooms", "1/4 cup diced bell peppers", "1 tsp olive oil"],
      instructions: [
        "Gather ingredients, skillet, and bowl.",
        "Heat oil in skillet over medium heat.",
        "Sauté mushrooms and peppers for 3-4 minutes.",
        "Whisk eggs in a bowl and pour over vegetables.",
        "Cook for 3-4 minutes until set.",
        "Fold in half and serve warm."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "10 minutes" }
    },
    {
      name: "Fruit Salad",
      category: "Breakfast",
      ingredients: ["1 medium apple", "1 medium orange", "1/2 cup seedless grapes", "1 tbsp fresh lemon juice"],
      instructions: [
        "Gather ingredients, knife, and bowl.",
        "Wash and chop apple into bite-sized pieces.",
        "Peel and segment orange, then cut into pieces.",
        "Halve grapes if desired.",
        "Combine fruits in bowl, drizzle with lemon juice, and toss.",
        "Serve chilled."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "0 minutes" }
    },
    {
      name: "Ham and Egg Cup",
      category: "Breakfast",
      ingredients: ["1 slice deli ham", "1 large egg", "1 tbsp shredded cheese", "Pinch of pepper"],
      instructions: [
        "Gather ingredients and muffin tin.",
        "Preheat oven to 375°F (190°C).",
        "Line a muffin tin cup with ham.",
        "Crack egg into ham cup.",
        "Top with cheese and pepper.",
        "Bake for 15 minutes until egg is set.",
        "Cool slightly and serve."
      ],
      prepTime: "20 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "15 minutes" }
    },
    {
      name: "Pumpkin Oatmeal",
      category: "Breakfast",
      ingredients: ["1/2 cup rolled oats", "1 cup milk", "2 tbsp pumpkin puree", "1/2 tsp ground cinnamon"],
      instructions: [
        "Gather ingredients, pot, and spoon.",
        "Combine oats and milk in a pot.",
        "Bring to a boil over medium heat, stirring occasionally.",
        "Stir in pumpkin puree and cinnamon.",
        "Simmer for 5-7 minutes.",
        "Serve warm."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "3 minutes", cooking: "7 minutes" }
    },
    {
      name: "Kale Smoothie",
      category: "Breakfast",
      ingredients: ["1 cup fresh kale", "1 ripe banana", "1 cup almond milk", "1 tsp flaxseed"],
      instructions: [
        "Gather ingredients and blender.",
        "Wash kale and remove stems.",
        "Peel banana and break into chunks.",
        "Add all ingredients to blender.",
        "Blend on high until smooth, about 30-60 seconds.",
        "Serve cold."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "4 minutes", cooking: "1 minute (blending)" }
    },
    {
      name: "Breakfast Quesadilla",
      category: "Breakfast",
      ingredients: ["1 flour tortilla", "2 large eggs", "1/4 cup shredded cheese (e.g., cheddar)", "1 tbsp salsa"],
      instructions: [
        "Gather ingredients, skillet, and spatula.",
        "Scramble eggs in skillet over medium heat for 3-4 minutes.",
        "Place tortilla in skillet, add eggs and cheese to one half.",
        "Fold tortilla and cook for 1-2 minutes per side until cheese melts.",
        "Top with salsa and serve warm."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "5 minutes" }
    },
    {
      name: "Peach Parfait",
      category: "Breakfast",
      ingredients: ["1 cup plain yogurt", "1 ripe peach, diced", "2 tbsp granola"],
      instructions: [
        "Gather ingredients and glass.",
        "Dice peach.",
        "Layer half the yogurt, peach, and 1 tbsp granola in glass.",
        "Repeat with remaining ingredients.",
        "Serve immediately."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },

    // Lunch (20)
    {
      name: "Caprese Salad",
      category: "Lunch",
      ingredients: ["1 medium tomato", "1/2 cup fresh mozzarella", "5 fresh basil leaves", "1 tbsp balsamic vinegar"],
      instructions: [
        "Gather ingredients, knife, and plate.",
        "Slice tomato and mozzarella into rounds.",
        "Layer tomato, mozzarella, and basil on a plate.",
        "Drizzle with balsamic vinegar.",
        "Serve immediately."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "0 minutes" }
    },
    {
      name: "Chicken Salad",
      category: "Lunch",
      ingredients: ["1 cup cooked chicken, shredded", "1/4 cup diced celery", "1 tbsp mayonnaise", "1/4 cup halved grapes"],
      instructions: [
        "Gather ingredients and bowl.",
        "Mix chicken, celery, mayonnaise, and grapes in a bowl.",
        "Serve on lettuce leaves or bread."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "0 minutes" }
    },
    {
      name: "Hummus Veggie Wrap",
      category: "Lunch",
      ingredients: ["1 flour tortilla", "2 tbsp hummus", "1/4 cup diced cucumber", "1/4 cup shredded carrots"],
      instructions: [
        "Gather ingredients and plate.",
        "Spread hummus evenly on tortilla.",
        "Add cucumber and carrots.",
        "Roll up tortilla and serve."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Tuna Melt",
      category: "Lunch",
      ingredients: ["1 can tuna (drained)", "1 tbsp mayonnaise", "1 slice cheddar cheese", "1 slice bread"],
      instructions: [
        "Gather ingredients, bowl, and oven.",
        "Mix tuna with mayonnaise in a bowl.",
        "Spread mixture on bread and top with cheese.",
        "Broil in oven for 2-3 minutes until cheese melts.",
        "Serve hot."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "7 minutes", cooking: "3 minutes" }
    },
    {
      name: "Zucchini Noodles",
      category: "Lunch",
      ingredients: ["1 medium zucchini", "1 tbsp pesto", "1/4 cup halved cherry tomatoes"],
      instructions: [
        "Gather ingredients, spiralizer, and bowl.",
        "Spiralize zucchini into noodles.",
        "Toss noodles with pesto and tomatoes in a bowl.",
        "Serve raw or sauté for 2-3 minutes."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "0 minutes (optional 3 minutes)" }
    },
    {
      name: "Black Bean Bowl",
      category: "Lunch",
      ingredients: ["1/2 cup cooked black beans", "1/4 cup corn", "1 tbsp salsa", "1/4 ripe avocado"],
      instructions: [
        "Gather ingredients and bowl.",
        "Mix beans, corn, and salsa in a bowl.",
        "Slice avocado and place on top.",
        "Serve warm or cold."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "0 minutes" }
    },
    {
      name: "Egg Salad",
      category: "Lunch",
      ingredients: ["2 large eggs", "1 tbsp mayonnaise", "1 tsp mustard", "Pinch of salt"],
      instructions: [
        "Gather ingredients, pot, and bowl.",
        "Boil eggs for 10 minutes, then cool and peel.",
        "Chop eggs and mix with mayonnaise, mustard, and salt.",
        "Serve on lettuce."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "10 minutes" }
    },
    {
      name: "Grilled Chicken Wrap",
      category: "Lunch",
      ingredients: ["1 flour tortilla", "3 oz chicken breast", "1/4 cup shredded lettuce", "1 tbsp ranch dressing"],
      instructions: [
        "Gather ingredients, grill pan, and plate.",
        "Grill chicken for 5-7 minutes per side until cooked.",
        "Slice chicken and place on tortilla with lettuce and ranch.",
        "Roll up and serve."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "10 minutes" }
    },
    {
      name: "Cucumber Sandwich",
      category: "Lunch",
      ingredients: ["2 slices bread", "2 tbsp cream cheese", "1/4 cucumber, sliced", "Pinch of salt"],
      instructions: [
        "Gather ingredients and knife.",
        "Spread cream cheese on both bread slices.",
        "Layer cucumber slices on one slice and sprinkle with salt.",
        "Top with second slice and serve."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Lentil Salad",
      category: "Lunch",
      ingredients: ["1/2 cup dry lentils", "1/4 cup diced tomatoes", "1 tbsp olive oil", "1 tsp vinegar"],
      instructions: [
        "Gather ingredients, pot, and bowl.",
        "Cook lentils in boiling water for 15-20 minutes until tender.",
        "Drain lentils and mix with tomatoes, oil, and vinegar.",
        "Chill and serve."
      ],
      prepTime: "20 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "15 minutes" }
    },
    {
      name: "Turkey Roll-Up",
      category: "Lunch",
      ingredients: ["3 slices turkey breast", "1 tbsp cream cheese", "1/4 cup fresh spinach"],
      instructions: [
        "Gather ingredients and plate.",
        "Spread cream cheese on turkey slices.",
        "Layer spinach on top.",
        "Roll up each slice and serve."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Shrimp Salad",
      category: "Lunch",
      ingredients: ["1/2 cup cooked shrimp", "1/4 cup diced celery", "1 tbsp mayonnaise", "1 tsp lemon juice"],
      instructions: [
        "Gather ingredients and bowl.",
        "Mix shrimp, celery, mayonnaise, and lemon juice in a bowl.",
        "Serve on greens."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "0 minutes" }
    },
    {
      name: "Beet Salad",
      category: "Lunch",
      ingredients: ["1 cooked beet", "1/4 cup goat cheese", "1 tbsp chopped walnuts", "1 tbsp balsamic vinegar"],
      instructions: [
        "Gather ingredients, knife, and plate.",
        "Slice beet into rounds.",
        "Top with goat cheese, walnuts, and balsamic vinegar.",
        "Serve."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "0 minutes" }
    },
    {
      name: "Rice and Beans",
      category: "Lunch",
      ingredients: ["1/2 cup rice", "1/2 cup cooked beans", "1 tsp ground cumin", "1 tbsp salsa"],
      instructions: [
        "Gather ingredients and pot.",
        "Cook rice in boiling water for 15 minutes.",
        "Mix cooked rice with beans, cumin, and salsa.",
        "Serve warm."
      ],
      prepTime: "20 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "15 minutes" }
    },
    {
      name: "Kale Salad",
      category: "Lunch",
      ingredients: ["1 cup fresh kale", "1/4 cup dried cranberries", "1 tbsp sliced almonds", "1 tbsp olive oil"],
      instructions: [
        "Gather ingredients and bowl.",
        "Massage kale with olive oil for 1-2 minutes.",
        "Add cranberries and almonds.",
        "Toss and serve."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "0 minutes" }
    },
    {
      name: "Salmon Salad",
      category: "Lunch",
      ingredients: ["1/2 cup cooked salmon", "1/4 cup diced cucumber", "1 tbsp plain yogurt", "1 tsp fresh dill"],
      instructions: [
        "Gather ingredients and bowl.",
        "Flake salmon into a bowl.",
        "Mix with cucumber, yogurt, and dill.",
        "Serve chilled."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "0 minutes" }
    },
    {
      name: "Veggie Pita",
      category: "Lunch",
      ingredients: ["1 whole pita", "2 tbsp hummus", "1/4 cup diced bell peppers", "1/4 cup shredded lettuce"],
      instructions: [
        "Gather ingredients and knife.",
        "Cut pita in half to form pockets.",
        "Spread hummus inside each half.",
        "Stuff with peppers and lettuce.",
        "Serve."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Broccoli Salad",
      category: "Lunch",
      ingredients: ["1 cup raw broccoli", "1/4 cup raisins", "1 tbsp sunflower seeds", "1 tbsp mayonnaise"],
      instructions: [
        "Gather ingredients, knife, and bowl.",
        "Chop broccoli into small florets.",
        "Mix with raisins, seeds, and mayonnaise.",
        "Serve cold."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "0 minutes" }
    },
    {
      name: "Chicken Lettuce Wrap",
      category: "Lunch",
      ingredients: ["3 oz cooked chicken", "1 tbsp soy sauce", "1/4 cup shredded carrots", "2 large lettuce leaves"],
      instructions: [
        "Gather ingredients and bowl.",
        "Shred chicken and mix with soy sauce and carrots.",
        "Spoon mixture into lettuce leaves.",
        "Wrap and serve."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "15 minutes", cooking: "0 minutes" }
    },
    {
      name: "Quinoa Wrap",
      category: "Lunch",
      ingredients: ["1 flour tortilla", "1/2 cup cooked quinoa", "1/4 cup fresh spinach", "1 tbsp tahini"],
      instructions: [
        "Gather ingredients and plate.",
        "Spread tahini on tortilla.",
        "Add quinoa and spinach.",
        "Roll up and serve."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "15 minutes", cooking: "0 minutes" }
    },

    // Dinner (20)
    {
      name: "Chicken Stir-Fry",
      category: "Dinner",
      ingredients: ["3 oz chicken breast", "1 cup broccoli florets", "1 tbsp soy sauce", "1 tsp olive oil"],
      instructions: [
        "Gather ingredients, skillet, and spatula.",
        "Heat oil in skillet over medium-high heat.",
        "Cook chicken for 5-7 minutes until done.",
        "Add broccoli and soy sauce, stir-fry for 5 minutes.",
        "Serve hot."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "10 minutes" }
    },
    {
      name: "Baked Cod",
      category: "Dinner",
      ingredients: ["1 cod fillet", "1 tsp lemon juice", "1 tsp minced garlic", "Pinch of salt"],
      instructions: [
        "Gather ingredients and baking sheet.",
        "Preheat oven to 400°F (200°C).",
        "Place cod on baking sheet.",
        "Drizzle with lemon juice, garlic, and salt.",
        "Bake for 12-15 minutes until flaky.",
        "Serve hot."
      ],
      prepTime: "20 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "15 minutes" }
    },
    {
      name: "Turkey Meatballs",
      category: "Dinner",
      ingredients: ["1/2 lb ground turkey", "1/4 cup breadcrumbs", "1 large egg", "1 tsp Italian seasoning"],
      instructions: [
        "Gather ingredients, bowl, and baking sheet.",
        "Preheat oven to 375°F (190°C).",
        "Mix all ingredients in a bowl.",
        "Form into 1-inch balls.",
        "Place on baking sheet and bake for 20 minutes.",
        "Serve hot."
      ],
      prepTime: "25 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "20 minutes" }
    },
    {
      name: "Stuffed Peppers",
      category: "Dinner",
      ingredients: ["1 bell pepper", "1/2 cup cooked rice", "1/4 cup cooked beans", "1 tbsp shredded cheese"],
      instructions: [
        "Gather ingredients, knife, and baking dish.",
        "Preheat oven to 375°F (190°C).",
        "Cut top off pepper and remove seeds.",
        "Mix rice and beans, stuff into pepper.",
        "Top with cheese.",
        "Bake for 20 minutes.",
        "Serve hot."
      ],
      prepTime: "30 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "20 minutes" }
    },
    {
      name: "Zucchini Boats",
      category: "Dinner",
      ingredients: ["1 medium zucchini", "1/4 cup ground turkey", "1 tbsp salsa", "1 tbsp shredded cheese"],
      instructions: [
        "Gather ingredients, skillet, and baking dish.",
        "Preheat oven to 375°F (190°C).",
        "Cut zucchini in half lengthwise and scoop out center.",
        "Cook turkey in skillet for 5-7 minutes.",
        "Mix turkey with salsa and fill zucchini.",
        "Top with cheese and bake for 20 minutes.",
        "Serve hot."
      ],
      prepTime: "25 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "20 minutes" }
    },
    {
      name: "Grilled Tilapia",
      category: "Dinner",
      ingredients: ["1 tilapia fillet", "1 tsp paprika", "1 tsp olive oil", "1 lemon wedge"],
      instructions: [
        "Gather ingredients and grill pan.",
        "Brush tilapia with oil and sprinkle with paprika.",
        "Heat grill pan over medium-high heat.",
        "Grill fish for 3-4 minutes per side.",
        "Serve with lemon wedge."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "10 minutes" }
    },
    {
      name: "Veggie Curry",
      category: "Dinner",
      ingredients: ["1 cup mixed vegetables (e.g., carrots, peas)", "1/2 cup coconut milk", "1 tsp curry powder", "1 tsp olive oil"],
      instructions: [
        "Gather ingredients and skillet.",
        "Heat oil in skillet over medium heat.",
        "Sauté vegetables for 5 minutes.",
        "Add coconut milk and curry powder.",
        "Simmer for 10 minutes.",
        "Serve warm."
      ],
      prepTime: "20 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "15 minutes" }
    },
    {
      name: "Pork Tenderloin",
      category: "Dinner",
      ingredients: ["3 oz pork tenderloin", "1 tsp dried rosemary", "1 tsp minced garlic", "1 tsp olive oil"],
      instructions: [
        "Gather ingredients, skillet, and baking dish.",
        "Preheat oven to 400°F (200°C).",
        "Season pork with rosemary and garlic.",
        "Heat oil in skillet and sear pork for 2-3 minutes per side.",
        "Transfer to baking dish and bake for 15 minutes.",
        "Serve hot."
      ],
      prepTime: "25 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "20 minutes" }
    },
    {
      name: "Shrimp Stir-Fry",
      category: "Dinner",
      ingredients: ["1/2 cup shrimp (peeled)", "1 cup snap peas", "1 tbsp soy sauce", "1 tsp olive oil"],
      instructions: [
        "Gather ingredients and skillet.",
        "Heat oil in skillet over medium-high heat.",
        "Cook shrimp for 2-3 minutes until pink.",
        "Add snap peas and soy sauce, stir-fry for 5 minutes.",
        "Serve hot."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "10 minutes" }
    },
    {
      name: "Sweet Potato Bowl",
      category: "Dinner",
      ingredients: ["1 medium sweet potato", "1/2 cup cooked chickpeas", "1 tbsp tahini", "1 tsp ground cumin"],
      instructions: [
        "Gather ingredients and baking sheet.",
        "Preheat oven to 400°F (200°C).",
        "Poke sweet potato with a fork and bake for 20 minutes.",
        "Cut open potato, top with chickpeas, tahini, and cumin.",
        "Serve warm."
      ],
      prepTime: "25 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "20 minutes" }
    },
    {
      name: "Chicken Skewers",
      category: "Dinner",
      ingredients: ["3 oz chicken breast", "1 bell pepper", "1 tsp paprika", "1 tsp olive oil"],
      instructions: [
        "Gather ingredients, skewers, and grill pan.",
        "Cut chicken and pepper into chunks.",
        "Thread onto skewers, brush with oil, and sprinkle with paprika.",
        "Grill over medium heat for 10 minutes, turning occasionally.",
        "Serve hot."
      ],
      prepTime: "20 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "10 minutes" }
    },
    {
      name: "Lentil Stew",
      category: "Dinner",
      ingredients: ["1/2 cup dry lentils", "2 cups vegetable broth", "1/4 cup diced carrots", "1 tsp dried thyme"],
      instructions: [
        "Gather ingredients and pot.",
        "Combine all ingredients in a pot.",
        "Bring to a boil over medium-high heat.",
        "Reduce heat and simmer for 25 minutes.",
        "Serve warm."
      ],
      prepTime: "30 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "25 minutes" }
    },
    {
      name: "Baked Chicken",
      category: "Dinner",
      ingredients: ["1 chicken breast", "1 tsp minced garlic", "1 tsp olive oil", "Pinch of salt"],
      instructions: [
        "Gather ingredients and baking dish.",
        "Preheat oven to 375°F (190°C).",
        "Rub chicken with oil, garlic, and salt.",
        "Place in baking dish and bake for 20-25 minutes.",
        "Serve hot."
      ],
      prepTime: "30 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "25 minutes" }
    },
    {
      name: "Eggplant Bake",
      category: "Dinner",
      ingredients: ["1 medium eggplant", "1/2 cup marinara sauce", "1/4 cup shredded cheese", "1 tsp olive oil"],
      instructions: [
        "Gather ingredients, knife, and baking dish.",
        "Preheat oven to 375°F (190°C).",
        "Slice eggplant into rounds.",
        "Layer eggplant, sauce, and cheese in baking dish.",
        "Drizzle with oil and bake for 20 minutes.",
        "Serve hot."
      ],
      prepTime: "25 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "20 minutes" }
    },
    {
      name: "Salmon Patties",
      category: "Dinner",
      ingredients: ["1 can salmon (drained)", "1/4 cup breadcrumbs", "1 large egg", "1 tsp dried dill"],
      instructions: [
        "Gather ingredients, bowl, and skillet.",
        "Mix salmon, breadcrumbs, egg, and dill in a bowl.",
        "Form into patties.",
        "Heat skillet over medium heat and cook patties for 3-4 minutes per side.",
        "Serve hot."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "10 minutes" }
    },
    {
      name: "Tofu Stir-Fry",
      category: "Dinner",
      ingredients: ["1/2 cup firm tofu, cubed", "1 cup broccoli florets", "1 tbsp soy sauce", "1 tsp olive oil"],
      instructions: [
        "Gather ingredients and skillet.",
        "Heat oil in skillet over medium-high heat.",
        "Cook tofu for 5 minutes until golden.",
        "Add broccoli and soy sauce, stir-fry for 5 minutes.",
        "Serve hot."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "10 minutes" }
    },
    {
      name: "Beef Lettuce Wraps",
      category: "Dinner",
      ingredients: ["3 oz ground beef", "1 tbsp hoisin sauce", "1/4 cup shredded carrots", "2 large lettuce leaves"],
      instructions: [
        "Gather ingredients and skillet.",
        "Cook beef in skillet over medium heat for 5-7 minutes.",
        "Mix in hoisin sauce and carrots.",
        "Spoon into lettuce leaves and serve."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "10 minutes" }
    },
    {
      name: "Mushroom Risotto",
      category: "Dinner",
      ingredients: ["1/2 cup arborio rice", "2 cups vegetable broth", "1/4 cup sliced mushrooms", "1 tsp olive oil"],
      instructions: [
        "Gather ingredients and pot.",
        "Heat oil in pot and sauté mushrooms for 3 minutes.",
        "Add rice and 1/2 cup broth, stirring until absorbed.",
        "Continue adding broth 1/2 cup at a time, stirring for 20 minutes.",
        "Serve warm."
      ],
      prepTime: "25 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "20 minutes" }
    },
    {
      name: "Turkey Chili",
      category: "Dinner",
      ingredients: ["1/2 lb ground turkey", "1/2 cup cooked beans", "1/2 cup diced tomatoes", "1 tsp chili powder"],
      instructions: [
        "Gather ingredients and pot.",
        "Cook turkey in pot over medium heat for 5-7 minutes.",
        "Add beans, tomatoes, and chili powder.",
        "Simmer for 20 minutes.",
        "Serve warm."
      ],
      prepTime: "30 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "25 minutes" }
    },
    {
      name: "Spaghetti Squash",
      category: "Dinner",
      ingredients: ["1 small spaghetti squash", "1/2 cup marinara sauce", "1 tbsp shredded cheese", "1 tsp olive oil"],
      instructions: [
        "Gather ingredients and baking sheet.",
        "Preheat oven to 400°F (200°C).",
        "Cut squash in half, scoop out seeds, and brush with oil.",
        "Bake cut-side down for 30 minutes.",
        "Scrape out strands, top with sauce and cheese.",
        "Serve warm."
      ],
      prepTime: "35 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "30 minutes" }
    },

    // Snacks (20)
    {
      name: "Apple Nachos",
      category: "Snacks",
      ingredients: ["1 medium apple", "1 tbsp peanut butter", "1 tsp chocolate chips"],
      instructions: [
        "Gather ingredients and knife.",
        "Slice apple into thin rounds.",
        "Drizzle with peanut butter.",
        "Sprinkle with chocolate chips.",
        "Serve."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Hummus Dip",
      category: "Snacks",
      ingredients: ["1/4 cup hummus", "1/2 cup carrot sticks", "1/2 cup celery sticks"],
      instructions: [
        "Gather ingredients, knife, and plate.",
        "Cut carrots and celery into sticks.",
        "Serve with hummus."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Yogurt Bark",
      category: "Snacks",
      ingredients: ["1 cup plain yogurt", "1/4 cup fresh berries", "1 tbsp chopped nuts"],
      instructions: [
        "Gather ingredients, tray, and parchment paper.",
        "Spread yogurt on a parchment-lined tray.",
        "Top with berries and nuts.",
        "Freeze for 2 hours.",
        "Break into pieces and serve."
      ],
      prepTime: "10 minutes + 2 hours freezing",
      timeBreakdown: { preparation: "10 minutes", freezing: "2 hours", cooking: "0 minutes" }
    },
    {
      name: "Edamame",
      category: "Snacks",
      ingredients: ["1 cup edamame (in pods)", "1 tsp salt", "1 tsp soy sauce"],
      instructions: [
        "Gather ingredients and pot.",
        "Boil edamame in salted water for 5 minutes.",
        "Drain and toss with soy sauce.",
        "Serve warm."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "5 minutes" }
    },
    {
      name: "Nut Mix",
      category: "Snacks",
      ingredients: ["1/4 cup almonds", "1/4 cup walnuts", "1 tbsp dried cranberries"],
      instructions: [
        "Gather ingredients and bowl.",
        "Mix almonds, walnuts, and cranberries in a bowl.",
        "Serve."
      ],
      prepTime: "2 minutes",
      timeBreakdown: { preparation: "2 minutes", cooking: "0 minutes" }
    },
    {
      name: "Rice Cake Snack",
      category: "Snacks",
      ingredients: ["1 rice cake", "1 tbsp almond butter", "1/2 banana"],
      instructions: [
        "Gather ingredients and knife.",
        "Spread almond butter on rice cake.",
        "Slice banana and place on top.",
        "Serve."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Celery Boats",
      category: "Snacks",
      ingredients: ["2 celery sticks", "2 tbsp cream cheese", "1 tbsp raisins"],
      instructions: [
        "Gather ingredients and knife.",
        "Spread cream cheese on celery sticks.",
        "Top with raisins.",
        "Serve."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Frozen Grapes",
      category: "Snacks",
      ingredients: ["1 cup seedless grapes"],
      instructions: [
        "Gather ingredients and tray.",
        "Wash grapes and place on a tray.",
        "Freeze for 1 hour.",
        "Serve cold."
      ],
      prepTime: "5 minutes + 1 hour freezing",
      timeBreakdown: { preparation: "5 minutes", freezing: "1 hour", cooking: "0 minutes" }
    },
    {
      name: "Cheese Sticks",
      category: "Snacks",
      ingredients: ["2 string cheese sticks", "1/4 cup cherry tomatoes"],
      instructions: [
        "Gather ingredients and knife.",
        "Cut cheese into pieces if desired.",
        "Serve with cherry tomatoes."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Kale Chips",
      category: "Snacks",
      ingredients: ["1 cup fresh kale", "1 tsp olive oil", "Pinch of salt"],
      instructions: [
        "Gather ingredients and baking sheet.",
        "Preheat oven to 350°F (175°C).",
        "Toss kale with oil and salt.",
        "Spread on baking sheet and bake for 10 minutes.",
        "Serve."
      ],
      prepTime: "15 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "10 minutes" }
    },
    {
      name: "Cucumber Bites",
      category: "Snacks",
      ingredients: ["1/2 cucumber", "2 tbsp hummus", "1 tsp paprika"],
      instructions: [
        "Gather ingredients and knife.",
        "Slice cucumber into rounds.",
        "Top each slice with hummus.",
        "Sprinkle with paprika.",
        "Serve."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Trail Mix",
      category: "Snacks",
      ingredients: ["1/4 cup peanuts", "1/4 cup raisins", "1 tbsp sunflower seeds"],
      instructions: [
        "Gather ingredients and bowl.",
        "Mix peanuts, raisins, and seeds in a bowl.",
        "Serve."
      ],
      prepTime: "2 minutes",
      timeBreakdown: { preparation: "2 minutes", cooking: "0 minutes" }
    },
    {
      name: "Banana Bites",
      category: "Snacks",
      ingredients: ["1 banana", "1 tbsp plain yogurt", "1 tsp granola"],
      instructions: [
        "Gather ingredients and knife.",
        "Slice banana into rounds.",
        "Top each slice with yogurt and granola.",
        "Serve."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Avocado Crackers",
      category: "Snacks",
      ingredients: ["4 whole grain crackers", "1/4 ripe avocado", "Pinch of salt"],
      instructions: [
        "Gather ingredients and fork.",
        "Mash avocado with salt.",
        "Spread on crackers.",
        "Serve."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Pepper Slices",
      category: "Snacks",
      ingredients: ["1 bell pepper", "2 tbsp ranch dip"],
      instructions: [
        "Gather ingredients and knife.",
        "Slice bell pepper into strips.",
        "Serve with ranch dip."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Popcorn",
      category: "Snacks",
      ingredients: ["1/4 cup popcorn kernels", "1 tsp olive oil", "Pinch of salt"],
      instructions: [
        "Gather ingredients and pot.",
        "Heat oil in pot over medium heat.",
        "Add kernels and cover, popping for 3-5 minutes.",
        "Season with salt and serve."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "5 minutes" }
    },
    {
      name: "Fruit Skewers",
      category: "Snacks",
      ingredients: ["1/2 cup strawberries", "1/2 cup pineapple chunks", "1 tsp honey"],
      instructions: [
        "Gather ingredients and skewers.",
        "Thread strawberries and pineapple onto skewers.",
        "Drizzle with honey.",
        "Serve."
      ],
      prepTime: "10 minutes",
      timeBreakdown: { preparation: "10 minutes", cooking: "0 minutes" }
    },
    {
      name: "Carrot Sticks",
      category: "Snacks",
      ingredients: ["1 medium carrot", "2 tbsp hummus"],
      instructions: [
        "Gather ingredients and knife.",
        "Cut carrot into sticks.",
        "Serve with hummus."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Almond Butter Dip",
      category: "Snacks",
      ingredients: ["1 medium apple", "1 tbsp almond butter"],
      instructions: [
        "Gather ingredients and knife.",
        "Slice apple into wedges.",
        "Serve with almond butter for dipping."
      ],
      prepTime: "5 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "0 minutes" }
    },
    {
      name: "Chickpea Snack",
      category: "Snacks",
      ingredients: ["1/2 cup canned chickpeas", "1 tsp paprika", "1 tsp olive oil"],
      instructions: [
        "Gather ingredients and baking sheet.",
        "Preheat oven to 400°F (200°C).",
        "Rinse and drain chickpeas.",
        "Toss with oil and paprika.",
        "Spread on baking sheet and bake for 20 minutes.",
        "Serve warm."
      ],
      prepTime: "25 minutes",
      timeBreakdown: { preparation: "5 minutes", cooking: "20 minutes" }
    }
  ];

  const recipes = [...originalRecipes, ...additionalRecipes];

  const spinWheel = () => {
    if (isSpinning || !recipes.length) return;

    setIsSpinning(true);
    setSelectedRecipe(null);
    const randomRotation = Math.floor(Math.random() * 3600) + 1440; // 4-10 spins
    setRotation(prevRotation => prevRotation + randomRotation);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      setSelectedRecipe(recipes[randomIndex]);
      setIsSpinning(false);
    }, 3000);
  };

  const resetSpin = () => {
    setSelectedRecipe(null);
    setRotation(0);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="title">mealSpin</h1>
        <p className="subtitle">What the FUCK should I eat?</p>
      </header>

      <main className="app-main">
        <div className="wheel-container">
          <div
            className="wheel"
            onClick={spinWheel}
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning ? 'transform 3s ease-out' : 'none'
            }}
          >
            {/* Wheel segments are styled in CSS */}
            <div className="wheel-pointer"></div>
          </div>
        </div>

        {selectedRecipe && (
          <div className="recipe-overlay">
            <div className="recipe-modal">
              <h2>{selectedRecipe.name}</h2>
              <p className="prep-time">Prep Time: {selectedRecipe.prepTime}</p>
              <section className="recipe-section">
                <h3>Ingredients</h3>
                <ul>
                  {selectedRecipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="recipe-section">
                <h3>Instructions</h3>
                <ol>
                  {selectedRecipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </section>
              <button className="new-spin-button" onClick={resetSpin}>
                Spin Again
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;