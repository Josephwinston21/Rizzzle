.PHONY: build test deploy

build:
	@echo "Building the application..."
	mvn clean install

test:
	@echo "Running tests..."
	mvn test

deploy:
	@echo "Deploying the application..."
	eb deploy RizzzleApp-env


#Instructions:
#
#Customize Tasks: Modify or add additional tasks as necessary for your workflow.
#Use Make Commands: Use make install, make build, make test, and make deploy to streamline project management.
