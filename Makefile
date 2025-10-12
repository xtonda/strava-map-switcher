BRANCH = $(or $(shell git symbolic-ref --short HEAD),$(error cannot detect branch))

.PHONY: zip
zip:
	git archive -o $(notdir $(CURDIR))-$(shell git describe)-$(BRANCH).zip @

.PHONY: release
release:
	git tag -s v$(shell jq -r .version manifest.json)$(addprefix -,$(filter-out master,$(BRANCH)))
	$(MAKE) zip
