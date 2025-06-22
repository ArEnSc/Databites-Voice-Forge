import React, { useState } from 'react';
import { Copy, Check, Terminal, Cpu, Mic, AudioWaveform, Book, FileJson } from 'lucide-react';

export const Documentation = () => {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const endpoints = [
    {
      name: 'Health Check',
      method: 'GET',
      path: '/api/health',
      description: 'Check the health status of the API',
      response: {
        status: 'healthy',
        version: '0.1.0'
      }
    },
    {
      name: 'Generate Voice',
      method: 'POST',
      path: '/api/voice/generate',
      description: 'Generate voice from text using specified settings',
      request: {
        text: 'Hello, world!',
        voice_id: 'default-voice',
        settings: {
          speed: 1.0,
          pitch: 1.0,
          quality: 'high'
        }
      },
      response: {
        id: '123e4567-e89b-12d3-a456-426614174000',
        audio_url: 'local_dir/audio/123e4567.wav',
        duration: 2.5,
        format: 'wav'
      }
    },
    {
      name: 'Clone Voice',
      method: 'POST',
      path: '/api/voice/clone',
      description: 'Create a new voice clone from audio sample',
      request: {
        audio_file: 'sample.wav',
        name: 'Custom Voice',
        description: 'My custom voice model'
      },
      response: {
        voice_id: '123e4567-e89b-12d3-a456-426614174000',
        name: 'Custom Voice',
        status: 'processing'
      }
    }
  ];

  return (
    <section id="docs" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            API
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Documentation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive API reference for the VoiceForge SDK. All endpoints are available for on-premise deployment.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <Terminal className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Getting Started</h3>
            <p className="text-gray-600 text-sm">Quick setup guide for local deployment</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <Book className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">API Reference</h3>
            <p className="text-gray-600 text-sm">Complete endpoint documentation</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <Cpu className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">SDK Examples</h3>
            <p className="text-gray-600 text-sm">Code samples and tutorials</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <FileJson className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Response Types</h3>
            <p className="text-gray-600 text-sm">API response schemas</p>
          </div>
        </div>

        {/* Base URL */}
        <div className="bg-slate-900 rounded-xl p-6 mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <AudioWaveform className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Base URL</h3>
            </div>
            <button
              onClick={() => copyToClipboard('http://localhost:8080', 'base-url')}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              {copiedEndpoint === 'base-url' ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span className="text-sm">Copy</span>
            </button>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
            <span className="text-blue-400">http://</span>
            <span className="text-gray-300">localhost</span>
            <span className="text-gray-500">:</span>
            <span className="text-green-400">8080</span>
          </div>
        </div>

        {/* Endpoints */}
        <div className="space-y-8">
          {endpoints.map((endpoint, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold
                      ${endpoint.method === 'GET' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                      {endpoint.method}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{endpoint.name}</h3>
                  </div>
                  <button
                    onClick={() => copyToClipboard(endpoint.path, endpoint.path)}
                    className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {copiedEndpoint === endpoint.path ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span className="text-sm">Copy</span>
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{endpoint.description}</p>
                <div className="font-mono text-sm text-gray-800 bg-gray-50 rounded-lg p-3">
                  {endpoint.path}
                </div>
              </div>

              {endpoint.request && (
                <div className="p-6 bg-gray-50 border-b border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Request Body</h4>
                  <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-gray-300">
                      {JSON.stringify(endpoint.request, null, 2)}
                    </code>
                  </pre>
                </div>
              )}

              <div className="p-6 bg-gray-50">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Response</h4>
                <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">
                    {JSON.stringify(endpoint.response, null, 2)}
                  </code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* SDK Integration */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
          <Mic className="w-12 h-12 text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Download our SDK and start integrating voice cloning capabilities into your applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Download SDK
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              View Examples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 