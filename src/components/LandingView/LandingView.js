import React from 'react';
import './LandingView.css';

export default function LandingView(props) {
  return (
    <div class="landing-page">
      <h1>A simple way to track your workouts</h1>
      <p>A training notebook is the easiest way to track, store and plan your workouts.</p>
      <div>
        <button type="button" class="lit-button landing-button">Try for free</button>
        <button type="button" class="unlit-button landing-button">Sign in</button>
      </div>
    </div>
  );
}

