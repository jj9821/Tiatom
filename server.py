#!/usr/bin/env python3
"""
✨ DIGITAL SANCTUARY LOCAL SERVER
Run this script to launch the sanctuary locally:
    python3 server.py [optional_port]
"""

import http.server
import socketserver
import sys
import os
import socket

def find_free_port(start_port=3000):
    port = start_port
    while port < 65535:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            res = sock.connect_ex(('127.0.0.1', port))
            if res != 0:
                return port
            port += 1
    return start_port

def run_server():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    preferred_port = 3000
    if len(sys.argv) > 1:
        try:
            preferred_port = int(sys.argv[1])
        except ValueError:
            pass

    port = find_free_port(preferred_port)
    
    Handler = http.server.SimpleHTTPRequestHandler
    Handler.extensions_map.update({
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
        '.json': 'application/json',
        '.svg': 'image/svg+xml',
        '.mp3': 'audio/mpeg',
        '.wav': 'audio/wav',
        '.ogg': 'audio/ogg',
        '.mp4': 'video/mp4',
        '.webm': 'video/webm',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.webp': 'image/webp',
    })

    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), Handler) as httpd:
        print("=" * 60)
        print(" 💖 DIGITAL SANCTUARY - LOCAL PREVIEW SERVER")
        print("=" * 60)
        print(f" ✨ Server running at: http://localhost:{port}")
        print(f" ✨ Open http://localhost:{port} in your browser to view.")
        print(" ✨ Press Ctrl+C to stop the server.")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🌙 Sanctuary server stopped. Wishing you eternal love!")

if __name__ == '__main__':
    run_server()
