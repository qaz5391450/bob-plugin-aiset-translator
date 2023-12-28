

/**
 * 
 */
function getApiKey(apiKeys) {
    const trimmedApiKeys = apiKeys.endsWith(",") ? apiKeys.slice(0, -1) : apiKeys;
    const apiKeySelection = trimmedApiKeys.split(",").map(key => key.trim());
    return apiKeySelection[Math.floor(Math.random() * apiKeySelection.length)];
  }



/**
 * 验证
 */
function handleValidateError(completion,error){
    completion({
        result: false,
        error: {
            ...error,
            type: error.type || 'unknown',
            message: error.message || 'Unknown error',
        }
    });
}

exports.getApiKey = getApiKey
exports.handleValidateError = handleValidateError