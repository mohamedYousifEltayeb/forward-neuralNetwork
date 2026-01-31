class Neuron {
    constructor(inputSize) {
        // Randomly initialize weights and bias
        this.weights = Array.from({ length: inputSize }, () => Math.random());
        this.bias = Math.random();  // Initialize bias
    }

    activate(inputs, f_x) {
        // Compute the weighted sum
        const weightsSum = this.weights.reduce((sum, weight, index) => sum + weight * inputs[index], this.bias);
        
        // Apply the specified activation function
        return this.applyF_x(weightsSum, f_x);
    }

    applyF_x(value, f_x) {
        switch (f_x) {
            case 'sigmoid':
                return 1 / (1 + Math.exp(-value));
            case 'relu':
                return Math.max(0, value);
            case 'tanh':
                const expPositiveX = Math.exp(value);
                const expNegativeX = Math.exp(-value);
                return (expPositiveX - expNegativeX) / (expPositiveX + expNegativeX);
            case 'gelu':
                return 0.5 * value * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (value + 0.044715 * Math.pow(value, 3))));
            case 'softmax':
                throw new Error('Softmax should be handled outside layers, not per neuron.');
            default:
                throw new Error('Unknown activation function: ' + f_x);
        }
    }
}

class Layer {
    constructor(numberOfNeurons, inputSize, f_x) {
        this.neurons = [];
        this.f_x = f_x;

        for (let i = 0; i < numberOfNeurons; i++) {
            this.neurons.push(new Neuron(inputSize));  // Pass input size to Neuron
        }
    }

    feedForward(inputs) {
        return this.neurons.map(neuron => neuron.activate(inputs, this.f_x));
    }
}

class NeuralNetwork {
    constructor(layerConfiguration) {
        this.layers = layerConfiguration.map((configuration, index) => {
            const inputSize = index === 0 ? 3 : configuration.numOfNeurons; // Set input size for the first layer
            return new Layer(configuration.numOfNeurons, inputSize, configuration.f_x);
        });
    }

    feedForward(inputs) {
        let output = inputs;
        for (const layer of this.layers) {
            output = layer.feedForward(output);
        }
        return output;
    }
}

// Example configuration for the neural network
const layersConfig = [
    { numOfNeurons: 3, f_x: 'sigmoid' }, // First layer
    { numOfNeurons: 2, f_x: 'sigmoid' },    // Second layer
    { numOfNeurons: 1, f_x: 'sigmoid' }   // Output layer
];

// Create the neural network
const neuralNetwork = new NeuralNetwork(layersConfig);

// Example input
const input = [230, 12,23, 56];

// Feed the input through the network
const output = neuralNetwork.feedForward(input);
console.log('Network Output:', output);
