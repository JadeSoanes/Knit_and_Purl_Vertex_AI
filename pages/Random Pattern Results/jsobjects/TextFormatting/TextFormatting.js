export default {
    formatInstructions: function(text) {
        // Replace '**' with an empty string to remove the formatting
        text = text.replace(/\*\*/g, '');
        
        // Replace ':**' with ':' to remove the trailing '**'
        text = text.replace(/:\*\*/g, ':');
        
        // Replace any remaining '*' characters with an empty string
        text = text.replace(/\*/g, '');
        
        return text;
    }
}
