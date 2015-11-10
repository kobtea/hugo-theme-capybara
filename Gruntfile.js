module.exports = function (grunt) {
    /* ========================================
     Config
     ======================================== */
    grunt.initConfig({
        src_less_files: 'less/*.less',
        src_less_main_file: 'less/capybara.less',
        dest_css_file: 'static/css/capybara.css',

        less: {
            develop: {
                src: '<%= src_less_main_file %>',
                dest: '<%= dest_css_file %>',
                options: {
                    paths: ["less"],
                    compress: false
                }
            },
            production: {
                src: '<%= src_less_main_file %>',
                dest: '<%= dest_css_file %>',
                options: {
                    paths: ["less"],
                    compress: true
                }
            }
        },

        watch: {
            scripts: {
                files: ['<%= src_less_files %>'],
                tasks: ['less:develop']
            }
        }

    });


    /* ========================================
     Plugin
     ======================================== */
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');


    /* ========================================
     Task
     ======================================== */
    grunt.registerTask('default', ['less:develop']);
    grunt.registerTask('production', ['less:production']);
};
