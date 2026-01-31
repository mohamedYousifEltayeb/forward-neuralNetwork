🧠 Simple Neural Network from Scratch (JavaScript)

This project is a minimal neural network implementation written in pure JavaScript, without any external libraries.
It demonstrates the core building blocks of neural networks:

Neurons

Layers

Activation functions

Feedforward propagation

The goal is educational clarity, not performance or training.

🚀 Features

Custom Neuron, Layer, and NeuralNetwork classes

Random weight and bias initialization

Multiple activation functions:

Sigmoid

ReLU

Tanh

GELU

Configurable network architecture

Simple feedforward inference

📂 Project Structure
.
├── neuralNetwork.js   # Main implementation
└── README.md          # Documentation
🧩 Code Overview
Neuron

Each neuron:

Stores its own weights and bias

Computes a weighted sum of inputs

Applies an activation function

activate(inputs, f_x)
Layer

A layer:

Contains multiple neurons

Applies the same activation function to all neurons

Produces an output vector

feedForward(inputs)
NeuralNetwork

The neural network:

Is composed of multiple layers

Passes outputs from one layer to the next

Produces a final output

feedForward(inputs)
⚙️ Supported Activation Functions
Name	Description
sigmoid	Smooth output between 0 and 1
relu	Zero for negative values
tanh	Output between -1 and 1
gelu	Gaussian Error Linear Unit
softmax	❌ Not supported per neuron

⚠️ Note: softmax should be applied at the layer level, not per neuron.

🛠 Example Usage
Network Configuration
const layersConfig = [
    { numOfNeurons: 3, f_x: 'sigmoid' },
    { numOfNeurons: 2, f_x: 'sigmoid' },
    { numOfNeurons: 1, f_x: 'sigmoid' }
];
Create the Network
const neuralNetwork = new NeuralNetwork(layersConfig);
Feed Input
const input = [230, 12, 23, 56];
const output = neuralNetwork.feedForward(input);


console.log('Network Output:', output);
📌 Important Notes

This implementation does NOT include training or backpropagation

Weights are initialized randomly

Intended for learning and experimentation

Not suitable for production ML tasks

🧠 Future Improvements

Add backpropagation and gradient descent

Add softmax layer support

Support variable input sizes correctly

Add loss functions (MSE, Cross-Entropy)

Visualization of network structure

📜 License

This project is open-source and free to use for learning and experimentation.
