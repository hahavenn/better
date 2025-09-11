#!/usr/bin/bash

# Set services commands
commands=(
  "auth npm run dev"
  "client npm run dev"
)

# Run each service in the background
for cmd in "${commands[@]}"; do
  dir="${cmd%% *}"          # Get the directory
  command="${cmd#* }"      # Get the command
    
  (cd "$dir" && eval "$command") &  # Run in the background
done

# Wait for all background processes to finish
wait
