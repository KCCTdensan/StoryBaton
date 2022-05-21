package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

var startCmd = &cobra.Command{
	Use:   "start",
	Short: "Start StoryBaton API",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("started")
	},
}
